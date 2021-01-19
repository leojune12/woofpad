<?php

use App\Http\Controllers\LikeController;
use App\Models\Like;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

//Route::get('/like', function () {
//    Like::create([
//        'user_id' => Auth::id(),
//        'photo_url' => 'google.com'
//    ]);
//});

//Route::resource('/like', LikeController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('/like', LikeController::class);
});
