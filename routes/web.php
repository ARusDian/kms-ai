<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AssistantController;
use App\Http\Controllers\ChildrenController;
use App\Http\Controllers\ChildrenImmunizationController;
use App\Http\Controllers\MeasurementController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/artikel', function () {
    return Inertia::render('Article');
})->name('article');


Route::prefix('dashboard')->middleware('auth')->group(function () {
    Route::get('/', function () {
        if (Auth::user()->hasAnyRole(['super-admin', 'admin'])) {
            $adminController = new AdminController();
            return $adminController->index();
        }
        return redirect()->route('data-anak.index');
    })->name('dashboard');

    Route::middleware(['role:super-admin'])->group(function () {
        Route::resource('/user', UserController::class);
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::prefix('admin')->middleware('role:admin|super-admin')->group(function () {
        // TODO::add routes for admin features
        Route::middleware('role:super-admin')->group(function () {
            Route::resource('/user', UserController::class);
        });
    });

    Route::prefix('user')->middleware('role:user|admin|super-admin')->group(function () {
        // TODO::add routes for user features
    });

    Route::resource('/data-anak', ChildrenController::class);
    Route::prefix('/data-anak/{child_id}')->group(function () {
        Route::resource('/pengukuran', MeasurementController::class);
        Route::resource('/imunisasi', ChildrenImmunizationController::class);
        Route::get('/ask', [AssistantController::class, 'askGrowth'])->name('ask.growth');
    });
    Route::get('/ask', [AssistantController::class, 'askView'])->name('ask');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');





Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
