import { z } from 'zod';

declare const configSchema: z.ZodObject<z.objectUtil.extendShape<{
    $schema: z.ZodOptional<z.ZodString>;
    style: z.ZodString;
    rsc: z.ZodDefault<z.ZodBoolean>;
    tsx: z.ZodDefault<z.ZodBoolean>;
    tailwind: z.ZodObject<{
        config: z.ZodOptional<z.ZodString>;
        css: z.ZodString;
        baseColor: z.ZodString;
        cssVariables: z.ZodDefault<z.ZodBoolean>;
        prefix: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        css: string;
        baseColor: string;
        cssVariables: boolean;
        config?: string | undefined;
        prefix?: string | undefined;
    }, {
        css: string;
        baseColor: string;
        config?: string | undefined;
        cssVariables?: boolean | undefined;
        prefix?: string | undefined;
    }>;
    aliases: z.ZodObject<{
        components: z.ZodString;
        utils: z.ZodString;
        ui: z.ZodOptional<z.ZodString>;
        lib: z.ZodOptional<z.ZodString>;
        hooks: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        components: string;
        utils: string;
        ui?: string | undefined;
        lib?: string | undefined;
        hooks?: string | undefined;
    }, {
        components: string;
        utils: string;
        ui?: string | undefined;
        lib?: string | undefined;
        hooks?: string | undefined;
    }>;
    iconLibrary: z.ZodOptional<z.ZodString>;
}, {
    resolvedPaths: z.ZodObject<{
        cwd: z.ZodString;
        tailwindConfig: z.ZodString;
        tailwindCss: z.ZodString;
        utils: z.ZodString;
        components: z.ZodString;
        lib: z.ZodString;
        hooks: z.ZodString;
        ui: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        components: string;
        utils: string;
        ui: string;
        lib: string;
        hooks: string;
        cwd: string;
        tailwindConfig: string;
        tailwindCss: string;
    }, {
        components: string;
        utils: string;
        ui: string;
        lib: string;
        hooks: string;
        cwd: string;
        tailwindConfig: string;
        tailwindCss: string;
    }>;
}>, "strict", z.ZodTypeAny, {
    style: string;
    rsc: boolean;
    tsx: boolean;
    tailwind: {
        css: string;
        baseColor: string;
        cssVariables: boolean;
        config?: string | undefined;
        prefix?: string | undefined;
    };
    aliases: {
        components: string;
        utils: string;
        ui?: string | undefined;
        lib?: string | undefined;
        hooks?: string | undefined;
    };
    resolvedPaths: {
        components: string;
        utils: string;
        ui: string;
        lib: string;
        hooks: string;
        cwd: string;
        tailwindConfig: string;
        tailwindCss: string;
    };
    $schema?: string | undefined;
    iconLibrary?: string | undefined;
}, {
    style: string;
    tailwind: {
        css: string;
        baseColor: string;
        config?: string | undefined;
        cssVariables?: boolean | undefined;
        prefix?: string | undefined;
    };
    aliases: {
        components: string;
        utils: string;
        ui?: string | undefined;
        lib?: string | undefined;
        hooks?: string | undefined;
    };
    resolvedPaths: {
        components: string;
        utils: string;
        ui: string;
        lib: string;
        hooks: string;
        cwd: string;
        tailwindConfig: string;
        tailwindCss: string;
    };
    $schema?: string | undefined;
    rsc?: boolean | undefined;
    tsx?: boolean | undefined;
    iconLibrary?: string | undefined;
}>;
type Config = z.infer<typeof configSchema>;

declare const registryItemTypeSchema: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:page", "registry:file", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
declare const registryItemFileSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    path: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["registry:file", "registry:page"]>;
    target: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    type: "registry:page" | "registry:file";
    target: string;
    content?: string | undefined;
}, {
    path: string;
    type: "registry:page" | "registry:file";
    target: string;
    content?: string | undefined;
}>, z.ZodObject<{
    path: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
    target: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path: string;
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    content?: string | undefined;
    target?: string | undefined;
}, {
    path: string;
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    content?: string | undefined;
    target?: string | undefined;
}>]>;
declare const registryItemTailwindSchema: z.ZodObject<{
    config: z.ZodOptional<z.ZodObject<{
        content: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        plugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        content?: string[] | undefined;
        theme?: Record<string, any> | undefined;
        plugins?: string[] | undefined;
    }, {
        content?: string[] | undefined;
        theme?: Record<string, any> | undefined;
        plugins?: string[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    config?: {
        content?: string[] | undefined;
        theme?: Record<string, any> | undefined;
        plugins?: string[] | undefined;
    } | undefined;
}, {
    config?: {
        content?: string[] | undefined;
        theme?: Record<string, any> | undefined;
        plugins?: string[] | undefined;
    } | undefined;
}>;
declare const registryItemCssVarsSchema: z.ZodObject<{
    light: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    dark: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    light?: Record<string, string> | undefined;
    dark?: Record<string, string> | undefined;
}, {
    light?: Record<string, string> | undefined;
    dark?: Record<string, string> | undefined;
}>;
declare const registryItemSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:page", "registry:file", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
    title: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    devDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    registryDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    files: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        path: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<["registry:file", "registry:page"]>;
        target: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    }, {
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    }>, z.ZodObject<{
        path: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
        target: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    }, {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    }>]>, "many">>;
    tailwind: z.ZodOptional<z.ZodObject<{
        config: z.ZodOptional<z.ZodObject<{
            content: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            plugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        }, {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    }, {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    }>>;
    cssVars: z.ZodOptional<z.ZodObject<{
        light: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        dark: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    }, {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    }>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    docs: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}, {
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}>;
type RegistryItem = z.infer<typeof registryItemSchema>;
declare const registrySchema: z.ZodObject<{
    name: z.ZodString;
    homepage: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        $schema: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:page", "registry:file", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
        title: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        devDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        registryDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        files: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            path: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<["registry:file", "registry:page"]>;
            target: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            path: string;
            type: "registry:page" | "registry:file";
            target: string;
            content?: string | undefined;
        }, {
            path: string;
            type: "registry:page" | "registry:file";
            target: string;
            content?: string | undefined;
        }>, z.ZodObject<{
            path: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
            target: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
            content?: string | undefined;
            target?: string | undefined;
        }, {
            path: string;
            type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
            content?: string | undefined;
            target?: string | undefined;
        }>]>, "many">>;
        tailwind: z.ZodOptional<z.ZodObject<{
            config: z.ZodOptional<z.ZodObject<{
                content: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                plugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            }, {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            config?: {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        }, {
            config?: {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        }>>;
        cssVars: z.ZodOptional<z.ZodObject<{
            light: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            dark: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            light?: Record<string, string> | undefined;
            dark?: Record<string, string> | undefined;
        }, {
            light?: Record<string, string> | undefined;
            dark?: Record<string, string> | undefined;
        }>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        docs: z.ZodOptional<z.ZodString>;
        categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        name: string;
        $schema?: string | undefined;
        tailwind?: {
            config?: {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } | undefined;
        dependencies?: string[] | undefined;
        devDependencies?: string[] | undefined;
        files?: ({
            path: string;
            type: "registry:page" | "registry:file";
            target: string;
            content?: string | undefined;
        } | {
            path: string;
            type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
            content?: string | undefined;
            target?: string | undefined;
        })[] | undefined;
        title?: string | undefined;
        author?: string | undefined;
        description?: string | undefined;
        registryDependencies?: string[] | undefined;
        cssVars?: {
            light?: Record<string, string> | undefined;
            dark?: Record<string, string> | undefined;
        } | undefined;
        meta?: Record<string, any> | undefined;
        docs?: string | undefined;
        categories?: string[] | undefined;
    }, {
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        name: string;
        $schema?: string | undefined;
        tailwind?: {
            config?: {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } | undefined;
        dependencies?: string[] | undefined;
        devDependencies?: string[] | undefined;
        files?: ({
            path: string;
            type: "registry:page" | "registry:file";
            target: string;
            content?: string | undefined;
        } | {
            path: string;
            type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
            content?: string | undefined;
            target?: string | undefined;
        })[] | undefined;
        title?: string | undefined;
        author?: string | undefined;
        description?: string | undefined;
        registryDependencies?: string[] | undefined;
        cssVars?: {
            light?: Record<string, string> | undefined;
            dark?: Record<string, string> | undefined;
        } | undefined;
        meta?: Record<string, any> | undefined;
        docs?: string | undefined;
        categories?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    homepage: string;
    items: {
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        name: string;
        $schema?: string | undefined;
        tailwind?: {
            config?: {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } | undefined;
        dependencies?: string[] | undefined;
        devDependencies?: string[] | undefined;
        files?: ({
            path: string;
            type: "registry:page" | "registry:file";
            target: string;
            content?: string | undefined;
        } | {
            path: string;
            type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
            content?: string | undefined;
            target?: string | undefined;
        })[] | undefined;
        title?: string | undefined;
        author?: string | undefined;
        description?: string | undefined;
        registryDependencies?: string[] | undefined;
        cssVars?: {
            light?: Record<string, string> | undefined;
            dark?: Record<string, string> | undefined;
        } | undefined;
        meta?: Record<string, any> | undefined;
        docs?: string | undefined;
        categories?: string[] | undefined;
    }[];
}, {
    name: string;
    homepage: string;
    items: {
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        name: string;
        $schema?: string | undefined;
        tailwind?: {
            config?: {
                content?: string[] | undefined;
                theme?: Record<string, any> | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } | undefined;
        dependencies?: string[] | undefined;
        devDependencies?: string[] | undefined;
        files?: ({
            path: string;
            type: "registry:page" | "registry:file";
            target: string;
            content?: string | undefined;
        } | {
            path: string;
            type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
            content?: string | undefined;
            target?: string | undefined;
        })[] | undefined;
        title?: string | undefined;
        author?: string | undefined;
        description?: string | undefined;
        registryDependencies?: string[] | undefined;
        cssVars?: {
            light?: Record<string, string> | undefined;
            dark?: Record<string, string> | undefined;
        } | undefined;
        meta?: Record<string, any> | undefined;
        docs?: string | undefined;
        categories?: string[] | undefined;
    }[];
}>;
type Registry = z.infer<typeof registrySchema>;
declare const registryIndexSchema: z.ZodArray<z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:page", "registry:file", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
    title: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    devDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    registryDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    files: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        path: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<["registry:file", "registry:page"]>;
        target: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    }, {
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    }>, z.ZodObject<{
        path: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
        target: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    }, {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    }>]>, "many">>;
    tailwind: z.ZodOptional<z.ZodObject<{
        config: z.ZodOptional<z.ZodObject<{
            content: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            plugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        }, {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    }, {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    }>>;
    cssVars: z.ZodOptional<z.ZodObject<{
        light: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        dark: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    }, {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    }>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    docs: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}, {
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}>, "many">;
declare const stylesSchema: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    label: string;
}, {
    name: string;
    label: string;
}>, "many">;
declare const iconsSchema: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>>;
declare const registryBaseColorSchema: z.ZodObject<{
    inlineColors: z.ZodObject<{
        light: z.ZodRecord<z.ZodString, z.ZodString>;
        dark: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        light: Record<string, string>;
        dark: Record<string, string>;
    }, {
        light: Record<string, string>;
        dark: Record<string, string>;
    }>;
    cssVars: z.ZodObject<{
        light: z.ZodRecord<z.ZodString, z.ZodString>;
        dark: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        light: Record<string, string>;
        dark: Record<string, string>;
    }, {
        light: Record<string, string>;
        dark: Record<string, string>;
    }>;
    inlineColorsTemplate: z.ZodString;
    cssVarsTemplate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cssVars: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    inlineColors: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    inlineColorsTemplate: string;
    cssVarsTemplate: string;
}, {
    cssVars: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    inlineColors: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    inlineColorsTemplate: string;
    cssVarsTemplate: string;
}>;
declare const registryResolvedItemsTreeSchema: z.ZodObject<Pick<{
    $schema: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:page", "registry:file", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
    title: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    devDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    registryDependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    files: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        path: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<["registry:file", "registry:page"]>;
        target: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    }, {
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    }>, z.ZodObject<{
        path: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<["registry:lib", "registry:block", "registry:component", "registry:ui", "registry:hook", "registry:theme", "registry:example", "registry:style", "registry:internal"]>;
        target: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    }, {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    }>]>, "many">>;
    tailwind: z.ZodOptional<z.ZodObject<{
        config: z.ZodOptional<z.ZodObject<{
            content: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            plugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        }, {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    }, {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    }>>;
    cssVars: z.ZodOptional<z.ZodObject<{
        light: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        dark: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    }, {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    }>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    docs: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "tailwind" | "dependencies" | "devDependencies" | "files" | "cssVars" | "docs">, "strip", z.ZodTypeAny, {
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    docs?: string | undefined;
}, {
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    docs?: string | undefined;
}>;

declare function getRegistryIndex(): Promise<{
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}[] | undefined>;
declare function getRegistryStyles(): Promise<{
    name: string;
    label: string;
}[]>;
declare function getRegistryIcons(): Promise<Record<string, Record<string, string>>>;
declare function getRegistryItem(name: string, style: string): Promise<{
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
} | null>;
declare function getRegistryBaseColors(): Promise<{
    name: string;
    label: string;
}[]>;
declare function getRegistryBaseColor(baseColor: string): Promise<{
    cssVars: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    inlineColors: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    inlineColorsTemplate: string;
    cssVarsTemplate: string;
} | undefined>;
declare function resolveTree(index: z.infer<typeof registryIndexSchema>, names: string[]): Promise<{
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}[]>;
declare function fetchTree(style: string, tree: z.infer<typeof registryIndexSchema>): Promise<{
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}[] | undefined>;
declare function getItemTargetPath(config: Config, item: Pick<z.infer<typeof registryItemSchema>, "type">, override?: string): Promise<string | null>;
declare function fetchRegistry(paths: string[]): Promise<unknown[]>;
declare function registryResolveItemsTree(names: z.infer<typeof registryItemSchema>["name"][], config: Config): Promise<{
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    docs?: string | undefined;
} | null>;
declare function registryGetTheme(name: string, config: Config): Promise<{
    name: string;
    type: "registry:theme";
    tailwind: {
        config: {
            theme: {
                extend: {
                    borderRadius: {
                        lg: string;
                        md: string;
                        sm: string;
                    };
                    colors: {};
                };
            };
        };
    };
    cssVars: {
        light: {
            radius: string;
        };
        dark: {};
    };
} | null>;
declare function resolveRegistryItems(names: string[], config: Config): Promise<string[]>;
declare function getRegistryTypeAliasMap(): Map<string, string>;
declare function getRegistryParentMap(registryItems: z.infer<typeof registryItemSchema>[]): Map<string, {
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
    name: string;
    $schema?: string | undefined;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    files?: ({
        path: string;
        type: "registry:page" | "registry:file";
        target: string;
        content?: string | undefined;
    } | {
        path: string;
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:example" | "registry:style" | "registry:internal";
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    registryDependencies?: string[] | undefined;
    cssVars?: {
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
}>;

export { Registry, RegistryItem, fetchRegistry, fetchTree, getItemTargetPath, getRegistryBaseColor, getRegistryBaseColors, getRegistryIcons, getRegistryIndex, getRegistryItem, getRegistryParentMap, getRegistryStyles, getRegistryTypeAliasMap, iconsSchema, registryBaseColorSchema, registryGetTheme, registryIndexSchema, registryItemCssVarsSchema, registryItemFileSchema, registryItemSchema, registryItemTailwindSchema, registryItemTypeSchema, registryResolveItemsTree, registryResolvedItemsTreeSchema, registrySchema, resolveRegistryItems, resolveTree, stylesSchema };
