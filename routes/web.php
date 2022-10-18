<?php

use App\Http\Controllers\AlternativeController;
use App\Http\Controllers\CriteriaController;
use App\Http\Controllers\MatriceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function() {
    return Inertia::render('Home');
});

Route::get('/data-pegawai', function() {
    return Inertia::render('DataPegawai');
});

Route::resource('/data-kriteria', CriteriaController::class);
Route::resource('/data-alternatif', AlternativeController::class);
Route::resource('/data-matriks', MatriceController::class);



require __DIR__.'/auth.php';
