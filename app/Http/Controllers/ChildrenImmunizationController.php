<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ChildrenImmunization;
use App\Models\Immunization;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChildrenImmunizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $child_id)
    {
        
        return Inertia::render('Dashboard/Children/Immunization/Index', [
            "childId" => $child_id
        ]);
    }

    public function getImmunization(string $child_id)
    {
        $immunization = ChildrenImmunization::where('children_id', $child_id)->orderBy('id', 'desc')->paginate(10);

        return response()->json([
            "status" => "success",
            "code" => "200",
            "data" => $immunization
        ], 200);
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
            "children_id" => ["required", "exists:children,id", "integer"],
            "immunization_id" => ["required", "exists:immunizations,id", "integer"],
            "date_of_immunization" => ["required", "date", "before:tomorrow"],
            "status" => ["required", "in:done,undone"],
            "note" => ["nullable", "string", "max:255"],
        ]);

        $immunization = Immunization::find($validated["immunization_id"]);
        $recommended_date = now()->addDays($immunization->recommended_days);

        ChildrenImmunization::create([
            "children_id" => $validated["children_id"],
            "immunization_id" => $validated["immunization_id"],
            "date_of_immunization" => $validated["date_of_immunization"],
            "recommended_date" => $recommended_date,
            "status" => $validated["status"],
            "note" => $validated["note"],
        ]);

        return response()->json([
            "message" => "Children immunization created successfully",
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $validated = $request->validate([
            "children_id" => ["required", "exists:children,id", "integer"],
            "immunization_id" => ["required", "exists:immunizations,id", "integer"],
            "date_of_immunization" => ["required", "date", "before:tomorrow"],
            "status" => ["required", "in:done,undone"],
            "note" => ["nullable", "string", "max:255"],
        ]);
        
        $immunization = Immunization::find($validated["immunization_id"]);
        $recommended_date = now()->addDays($immunization->recommended_days);
        
        $childrenImmunization = ChildrenImmunization::find($id);
        $childrenImmunization->update([
            "children_id" => $validated["children_id"],
            "immunization_id" => $validated["immunization_id"],
            "date_of_immunization" => $validated["date_of_immunization"],
            "recommended_date" => $recommended_date,
            "status" => $validated["status"],
            "note" => $validated["note"],
        ]);

        return response()->json([
            "message" => "Children immunization updated successfully",
            "data" => $childrenImmunization
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
