<?php

use App\Http\Controllers\GuestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/immunization/child/{child_id}', [App\Http\Controllers\ChildrenImmunizationController::class, 'getImmunization'])->name('immunization.child.get');

Route::post('/guest/immunization', [GuestController::class, 'getImmunization'])->name('guest.immunization.get');
