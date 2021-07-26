<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/quotes', \App\Http\Controllers\QuoteIndexController::class);
Route::patch('/quotes/{quote}', \App\Http\Controllers\QuoteUpdateController::class);

Route::get('/quotes/collected', \App\Http\Controllers\CollectedIndexController::class);
Route::get('/quotes/collected/count', \App\Http\Controllers\CollectedCountController::class);
