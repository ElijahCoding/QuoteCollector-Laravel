<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;
use App\Http\Resources\QuoteResource;

class QuoteIndexController extends Controller
{
    public function __invoke()
    {
        return QuoteResource::collection(Quote::get());
    }
}
