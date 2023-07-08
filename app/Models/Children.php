<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Children extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'date_of_birth',
        'gender',
        'is_alergic',
        'alergic_desc',
        'photo_id',
        'blood_type',
        'user_id'
    ];

    protected $casts = [
        'is_alergic' => 'boolean'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function photo()
    {
        return $this->belongsTo(DocumentFile::class, 'photo_id');
    }

    public function measurements()
    {
        return $this->hasMany(Measurement::class);
    }

    public function childrenImmunizations()
    {
        return $this->hasMany(ChildrenImmunization::class);
    }

    public function immunizations()
    {
        return $this->belongsToMany(Immunization::class, 'children_immunizations');
    }
}
