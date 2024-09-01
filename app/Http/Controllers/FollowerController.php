<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use Inertia\Response;

class FollowerController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Followers/Index', [
            'followers' => auth()->user()->followers,
            'following' => auth()->user()->following,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'user_id' => 'required|exists:users,id'
        ]);

        $user = User::findOrFail($request->user_id);

        Gate::authorize('follow', $user);
        if (auth()->user()->following()->where('user_id', $user->id)->exists()) {
            return redirect()->back()->with('message', 'You are already following this user.');
        }
        
        auth()->user()->following()->attach($user);
    
        return redirect()->back()->with([
            'status' => 'success',
            'message' => 'You are now following this user.'
        ]);
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'user_id' => 'required|exists:users,id'
        ]);

        $user = User::findOrFail($request->user_id);

        // Gate::authorize('unfollow', $user);

        auth()->user()->following()->detach($user);
        return redirect()->back()->with([
            'status' => 'success',
            'message' => 'You have unfollowed this user.'
        ]);
    }
}