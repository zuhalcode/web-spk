<?php

namespace App\Http\Controllers;

use App\Models\Alternative;
use App\Models\Criteria;
use App\Models\Matrice;
use App\Models\Normalize;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TopsisController extends Controller
{
    function normalize() {
        $alternative = Alternative::all();
        $alternativeData = [];

        foreach($alternative as $alt) {
            array_push($alternativeData, [
                $alt->name,
                $alt->poin1,
                $alt->poin2,
                $alt->poin3,
                $alt->poin4,
                $alt->poin5,
            ]);
        }

        $pembagi = [0, 0, 0, 0, 0];
        
        foreach($alternative as $data) {
            $pembagi[0] += pow($data->poin1, 2);
            $pembagi[1] += pow($data->poin2, 2);
            $pembagi[2] += pow($data->poin3, 2);
            $pembagi[3] += pow($data->poin4, 2);
            $pembagi[4] += pow($data->poin5, 2);
        }

        for($i=0; $i < count($pembagi); $i++) $pembagi[$i] = round(sqrt($pembagi[$i]), 2);
        
        $normalize = [];

        foreach($alternativeData as $alt) {
            for($i=0; $i<count($pembagi); $i++) {
                $alt[$i+1] = round($alt[$i+1] / $pembagi[$i], 3);
            }
            array_push($normalize, $alt);
        }

        return $normalize;
    }

    function weightNorm() {
        $weight = [];
        $criterias = Criteria::all();
        foreach($criterias as $c) array_push($weight, $c->weight);

        $normalizeWeight = [];
        foreach($this->normalize() as $n) {
            for($i=0; $i<count($weight); $i++) {
                $n[$i+1] = $n[$i+1] * $weight[$i];
            }
            array_push($normalizeWeight, $n);
        }
        return $normalizeWeight;
    }

    function cmin() {
        $cmin = [10,10,10,10,10];
        foreach($this->weightNorm() as $wn) {
            if($cmin[0] > $wn[1]) $cmin[0] = $wn[1];
            if($cmin[1] > $wn[2]) $cmin[1] = $wn[2];
            if($cmin[2] > $wn[3]) $cmin[2] = $wn[3];
            if($cmin[3] > $wn[4]) $cmin[3] = $wn[4];
            if($cmin[4] > $wn[5]) $cmin[4] = $wn[5];
        }
        return $cmin;
    }

    function cmax() {
        $cmax = [0,0,0,0,0];
        foreach($this->weightNorm() as $wn) {
            if($cmax[0] < $wn[1]) $cmax[0] = $wn[1];
            if($cmax[1] < $wn[2]) $cmax[1] = $wn[2];
            if($cmax[2] < $wn[3]) $cmax[2] = $wn[3];
            if($cmax[3] < $wn[4]) $cmax[3] = $wn[4];
            if($cmax[4] < $wn[5]) $cmax[4] = $wn[5];
        }
        return $cmax;
    }

    function attr()
    {
        $attr = [];
        $criterias = Criteria::all();
        foreach($criterias as $c) {
            array_push($attr, $c->type);
        }
        return $attr;
    }

    function ymaxmin()
    {
        $ymax = [];
        $ymin = [];

        $cmax = $this->cmax();
        $cmin = $this->cmin();
        $attr = $this->attr();

        for($i=0; $i<count($attr); $i++) {
            if($attr[$i] == 'benefit') {
                array_push($ymax, $cmax[$i]);
                array_push($ymin, $cmin[$i]);
            }

            else if($attr[$i] == 'cost') {
                array_push($ymax, $cmin[$i]);
                array_push($ymin, $cmax[$i]);
            }
        }

        return [
            'ymax' => $ymax,
            'ymin' => $ymin
        ];
    }

    function dplusmin()
    {
        $dplusmin = [];
        $ymaxmin = $this->ymaxmin();
        $weightNormalize = $this->weightNorm();
        
        foreach($weightNormalize as $wn) {
            $dplus = 0;
            $dmin = 0;
            for($i=0; $i<count($ymaxmin['ymax']); $i++) {
                $dplus += pow($ymaxmin['ymax'][$i] - $wn[$i+1], 2);
                $dmin += pow($wn[$i+1] - $ymaxmin['ymin'][$i], 2);
            }
            $wn[6] = round(sqrt($dplus), 3);
            $wn[7] = round(sqrt($dmin), 3);
            array_push($dplusmin, $wn);
        }

        return $dplusmin;
    }

    public function matriceNormalize()
    {
        return Inertia::render('Topsis/MatriksNormalisasi', [
            'normalize' => $this->normalize()
        ]);
    }

    public function weightNormalize()
    {
        return Inertia::render('Topsis/BobotNormalisasi', [
            'weightNorm' => $this->weightNorm()
        ]);
    }

    public function idealSolution()
    {
        return Inertia::render('Topsis/SolusiIdeal', [
            'ymaxmin' => $this->ymaxmin()
        ]);
    }
    
    public function idealMatrice()
    {
        
        return Inertia::render('Topsis/JarakSolusiIdeal', [
            'dplusmin' => $this->dplusmin()
        ]);
    }

    public function preferenceValue()
    {
        return Inertia::render('Topsis/NilaiPreferensi');
    }

}
