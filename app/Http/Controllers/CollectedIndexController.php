<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuoteResource;
use App\Models\Quote;
use Illuminate\Http\Request;

class CollectedIndexController extends Controller
{
    public function __invoke()
    {
        return QuoteResource::collection(Quote::query()->whereSaved(true)->get());
    }
}
