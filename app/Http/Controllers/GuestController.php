<?php

namespace App\Http\Controllers;

use App\Models\Immunization;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function getImmunization(Request $request) {
        $immunizations = Immunization::where('recommended_days', '>=', $request->dayDiff)->orderBy('recommended_days', 'asc')->take(3)->get();

        return response()->json([
            'status' => 'success',
            'immunizations' => $immunizations,
        ], 200);
    }
}
