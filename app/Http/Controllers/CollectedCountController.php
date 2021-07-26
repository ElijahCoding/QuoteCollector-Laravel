<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuoteCountResource;
use App\Models\Quote;

class CollectedCountController extends Controller
{
    public function __invoke()
    {
        return new QuoteCountResource(Quote::query()->whereSaved(true)->count());
    }
}
