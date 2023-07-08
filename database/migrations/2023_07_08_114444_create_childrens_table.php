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
        Schema::create('childrens', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('date_of_birth');
            $table->enum('gender',['laki-laki','perempuan']);
            $table->boolean('is_alergic')->default(false);
            $table->string('alergic_desc')->nullable();
            $table->enum('blood_type',[
                '-A',
                '-B',
                '-AB',
                '-O',
                '+A',
                '+B',
                '+AB',
                '+O'
                ])->nullable();
            $table->foreignId('photo_id')->nullable()->constrained('document_files')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('childrens');
    }
};
