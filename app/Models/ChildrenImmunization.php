<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChildrenImmunization extends Model
{
    use HasFactory;

    protected $fillable =[
        'children_id',
        'immunization_id',
        'date_of_immunization',
        'recommended_date',
        'status',
        'note'

    ];

    public function children()
    {
        return $this->belongsTo(Children::class);
    }

    public function immunization()
    {
        return $this->belongsTo(Immunization::class);
    }
}
