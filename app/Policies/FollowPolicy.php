<?php

namespace App\Policies;

use App\Models\User;

class FollowPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }
    public function follow(User $user, User $other): bool
    {
        return $user->id !== $other->id;
    }
}
