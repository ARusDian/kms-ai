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
        Schema::create('immunizations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('prevention');
            $table->string('indication');
            $table->string('contraindication');
            $table->string('chase_immunization');
            $table->string('KIPI');
            $table->string('schedule');
            $table->integer('recommended_days');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('immunizations');
    }
};
