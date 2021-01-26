<?php

use App\Http\Controllers\BreedController;
use App\Http\Controllers\LikeController;
use App\Models\Like;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

//Route::resource('/like', LikeController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('/like', LikeController::class);
    Route::get('/breed/{breed}', [BreedController::class, 'show']);
});
