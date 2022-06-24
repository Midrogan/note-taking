<?php

namespace App\Models;

use App\Models\Text;
use App\Models\Title;
use App\Models\Subtitle;
use App\Models\Workspace;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Card extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function workspace()
    {
        return $this->belongsTo(Workspace::class);
    }

    public function titles()
    {
        return $this->hasMany(Title::class);
    }

    public function subtitles()
    {
        return $this->hasMany(Subtitle::class);
    }

    public function texts()
    {
        return $this->hasMany(Text::class);
    }
}
