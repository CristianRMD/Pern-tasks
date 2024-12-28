import {z} from 'zod';

export const createTaskSchema = z.object({
title:z.string({
    required_error: 'Title is required',

}).min(1).max(255),
description: z.string({
    required_error: 'Description is required',
}).min(1).max(255).optional(),

});

export const UpdateSchema = z.object({
    title:z.string({
        required_error: 'Title is required',
    
    }).min(1).max(255).optional(),
    description: z.string({
        required_error: 'Description is required',
    }).min(1).max(255).optional(),
    
    });
