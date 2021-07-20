<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteUpdateController extends Controller
{
    public function __invoke(Request $request, Quote $quote)
    {
        $validated = $this->validate($request, [
            'saved' => 'boolean'
        ]);

        $quote->update($validated);
    }
}
