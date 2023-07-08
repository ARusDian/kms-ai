<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('measurements', function (Blueprint $table) {
            $table->id();
            $table->float('height');
            $table->float('weight');
            $table->float('head_circumference')->nullable();
            $table->boolean('is_birth_measurement')->default(false);
            $table->string('date_of_measurement');
            $table->foreignId('children_id')->constrained('childrens')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('measurements');
    }
};
