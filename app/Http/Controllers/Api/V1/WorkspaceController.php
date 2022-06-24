<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Workspace;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\WorkspaceResource;
use App\Http\Requests\WorkspaceRequest;

class WorkspaceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WorkspaceResource::collection(Workspace::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WorkspaceRequest $request)
    {
        $workspace = Workspace::create($request->validated());

        return new WorkspaceResource($workspace);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Workspace $workspace)
    {
        return new WorkspaceResource($workspace);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(WorkspaceRequest $request, Workspace $workspace)
    {
        $workspace->update($request->validated());

        return new WorkspaceResource($workspace);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Workspace $workspace)
    {
        $workspace->delete();

        return response()->json(null, 204);
        // return response(null, Response::HTTP_NO_CONTENT);
    }
}
