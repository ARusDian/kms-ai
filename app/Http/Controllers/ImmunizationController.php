<?php

namespace App\Http\Controllers;

use App\Models\Immunization;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImmunizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            "name" => ["required", "string", "max:255"],
            "type" => ["required", "in:vaksin,imunoglobulin"],
            "prevention" => ["required", "string", "max:255"],
            "indication" => ["required", "string", "max:255"],
            "contraindication" => ["required", "string", "max:255"],
            "chase_immunization" => ["required", "string", "max:255"],
            "KIPI" => ["required", "string", "max:255"],
            "schedule" => ["required", "string", "max:255"],
            "recommended_days" => ["required", "numeric", "min:0"],
        ]);
        
        $immunization = Immunization::create($validated);

        return response()->json([
            "message" => "Immunization created successfully",
            "data" => $immunization
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
