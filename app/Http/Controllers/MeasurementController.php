<?php

namespace App\Http\Controllers;

use App\Models\Measurement;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeasurementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $child_id)
    {
        $measurements = Measurement::where('children_id', $child_id)->get();
        return Inertia::render('Dashboard/Children/Measurement/Index', [
            'measurements' => $measurements,
            'childId' => $child_id
        ]);
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
        //
        $validated = $request->validate([
            "weight" => ["required", "numeric", "min:0"],
            "height" => ["required", "numeric", "min:0"],
            "head_circumference" => ["nullable", "numeric", "min:0"],
            "note" => ["nullable", "string", "max:255"],
            "children_id" => ["required", "exists:children,id", "integer"],
        ]);

        $measurement = Measurement::create([
            "weight" => $validated["weight"],
            "height" => $validated["height"],
            "head_circumference" => $validated["head_circumference"],
            "note" => $validated["note"],
            "children_id" => $validated["children_id"],
            "date_of_measurement" => now(),
            "is_birth_measurement" => false
        ]);
        
        return redirect()->route('measurement.index', ['child_id' => $validated["children_id"]]);
        // return response()->json([
        //     "message" => "Measurement created successfully",
        //     "data" => $measurement
        // ], 201);
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

        $validated = $request->validate([
            "weight" => ["required", "numeric", "min:0"],
            "height" => ["required", "numeric", "min:0"],
            "head_circumference" => ["nullable", "numeric", "min:0"],
            "note" => ["nullable", "string", "max:255"],
            "children_id" => ["required", "exists:children,id", "integer"],
        ]);

        $measurement = Measurement::find($id);

        $measurement->update([
            "weight" => $validated["weight"],
            "height" => $validated["height"],
            "head_circumference" => $validated["head_circumference"],
            "note" => $validated["note"],
            "children_id" => $validated["children_id"],
        ]);

        return response()->json([
            "message" => "Measurement updated successfully",
            "data" => $measurement
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
