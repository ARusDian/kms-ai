<?php

namespace App\Http\Controllers;

use App\Models\Children;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    //
    public function index() {
        $children = Children::with('user')->get();
        
        return Inertia::render('Dashboard/Admin/Index', [
            'userName' => Auth::user()->name,
            'children' => $children
        ]);
    }
}
