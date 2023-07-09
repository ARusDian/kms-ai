<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssistantController extends Controller
{
    //
    public function askView()
    {
        $ACCESS_TOKEN = env('ACCESS_TOKEN_CHATGPT');
        $CHATGPT_PROXY_URL = env('CHATGPT_PROXY_URL');
        return Inertia::render('Dashboard/Assistant/Ask', [
            'ACCESS_TOKEN' => $ACCESS_TOKEN,
            'CHATGPT_PROXY_URL' => $CHATGPT_PROXY_URL
        ]);
    }
}
