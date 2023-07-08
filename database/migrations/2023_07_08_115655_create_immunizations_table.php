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
            $table->text('name');
            $table->text('type');
            $table->text('prevention');
            $table->text('indication');
            $table->text('contraindication');
            $table->text('chase_immunization');
            $table->text('KIPI');
            $table->text('schedule');
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
