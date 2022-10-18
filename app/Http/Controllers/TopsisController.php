<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TopsisController extends Controller
{
    public function matriceNormalize()
    {
        return Inertia::render('Topsis/MatriksNormalisasi');
    }

    public function weightNormalize()
    {
        return Inertia::render('Topsis/BobotNormalisasi');
    }

    public function idealSolution()
    {
        return Inertia::render('Topsis/JarakSolusiIdeal');
    }
    
    public function idealMatrice()
    {
        return Inertia::render('Topsis/MatriksIdeal');
    }

    public function preferenceValue()
    {
        return Inertia::render('Topsis/NilaiPreferensi');
    }

}
