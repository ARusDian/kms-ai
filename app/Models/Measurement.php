<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Measurement extends Model
{
    use HasFactory;

    protected $fillable = [
        'children_id',
        'date_of_measurement',
        'height',
        'weight',
        'head_circumference',
        'note',
        'is_birth_measurement'
    ];

    public function children()
    {
        return $this->belongsTo(Children::class);
    }

    public function scopeBirthMeasurement($query)
    {
        return $query->where('is_birth_measurement', true);
    }

    public function scopeNotBirthMeasurement($query)
    {
        return $query->where('is_birth_measurement', false);
    }

    public function scopeByChildren($query, $childrenId)
    {
        return $query->where('children_id', $childrenId);
    }

    public function scopeByDate($query, $date)
    {
        return $query->where('date_of_measurement', $date);
    }

    public function scopeByMonth($query, $month)
    {
        return $query->whereMonth('date_of_measurement', $month);
    }

    public function scopeByYear($query, $year)
    {
        return $query->whereYear('date_of_measurement', $year);
    }

    public function scopeByChildrenAndDate($query, $childrenId, $date)
    {
        return $query->where('children_id', $childrenId)->where('date_of_measurement', $date);
    }

    public function scopeByChildrenAndMonth($query, $childrenId, $month)
    {
        return $query->where('children_id', $childrenId)->whereMonth('date_of_measurement', $month);
    }

    public function scopeByChildrenAndYear($query, $childrenId, $year)
    {
        return $query->where('children_id', $childrenId)->whereYear('date_of_measurement', $year);
    }
}
