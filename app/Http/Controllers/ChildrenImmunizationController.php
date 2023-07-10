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

    public function getImmunization(Request $request, string $child_id)
    {
        $page = $request->query('page');
        $immunization = ChildrenImmunization::with('immunization')->where('children_id', $child_id)->orderBy('status', 'asc')->orderBy('recommended_date', 'asc')->paginate(6);

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
    public function show(string $child_id, string $id)
    {
        $childrenImmunization = ChildrenImmunization::with('immunization')->where('children_id', $child_id)->where('id', $id)->first();

        if (!$childrenImmunization) return abort(404, "Children immunization not found");

        return Inertia::render('Dashboard/Children/Immunization/Show', [
            "childImmunization" => $childrenImmunization
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $child_id, string $id)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $child_id, string $id)
    {
        $validated = $request->validate([
            "date_of_immunization" => ["nullable", "date", "before:tomorrow"],
            "status" => ["required", "in:belum,sudah"],
            "note" => ["nullable", "string", "max:255"],
        ]);

        $childrenImmunization = ChildrenImmunization::find($id);
        $childrenImmunization->update([
            "date_of_immunization" => $validated["date_of_immunization"] ?? null,
            "status" => $validated["status"],
            "note" => $validated["note"] ?? null,
        ]);

        return redirect()->route('imunisasi.index', ['child_id' => $child_id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
