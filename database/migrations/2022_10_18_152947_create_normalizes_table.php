<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('normalizes', function (Blueprint $table) {
            $table->id();
            $table->string('alternative');
            $table->float('c1');
            $table->float('c2');
            $table->float('c3');
            $table->float('c4');
            $table->float('c5');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('normalizes');
    }
};
