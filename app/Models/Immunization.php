<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Immunization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'prevention',
        'indication',
        'contraindication',
        'chase_immunization',
        'KIPI',
        'schedule',
        'recommended_days'
    ];

    public function childrenImmunizations()
    {
        return $this->hasMany(ChildrenImmunization::class);
    }

    public function children()
    {
        return $this->belongsToMany(Children::class, 'children_immunizations');
    }
}
