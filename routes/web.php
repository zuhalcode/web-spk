<?php

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

Route::get('/data-pegawai/tambah-data', function() {
    return Inertia::render('Pegawai/TambahDataPegawai');
});

Route::get('/departemen', function() {
    return Inertia::render('Home');
});
Route::get('/data-variabel', function() {
    return Inertia::render('Home');
});
Route::get('/rule-fuzzy', function() {
    return Inertia::render('Home');
});
Route::get('/penilaian', function() {
    return Inertia::render('Home');
});
Route::get('/hasil-analisa', function() {
    return Inertia::render('Home');
});


require __DIR__.'/auth.php';
