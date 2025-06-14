---
title: TypeScript and React Typescript Snippets
---

# Typescript / JavaScript Snippets

## `cons,clog`: Print to console

> Simple 'console.log();' print

```tsx
console.log('$0');
```

---

## `cwarn`: Print a warning to console

> Simple 'console.warn();' print

```tsx
console.warn('$0');
```

---

## `cerror,cerr`: Print an error to console

> Simple 'console.error();' print

```tsx
console.error('$0');
```

# React Snippets

## `comp,cmp`: React component boilerplate

> Create an arrow function react component

```tsx
import { type ComponentProps } from 'react';

export type ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props = ComponentProps<'${2:div}'>;

const ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}} = ({ className, ...props }: ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props) => {
    return (
        <${2:div} className={className} {...props}>
            $0
        </${2:div}>
    )
};

export { ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}} };
```

---

## `compcva,compv,compvar,cmpv`: cva+react component boilerplate

> Create an arrow function react component using `class-variance-authority`

```tsx
import { type VariantProps, cva } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props = ComponentProps<'${2:div}'> & VariantProps<typeof variants>;

const variants = cva('', {
    variants: {}
});

const ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}} = ({ className, ...props }: ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props) => {
    return (
        <${2:div}
            className={cn(variants({}), className)}
            {...props}
        >
            $0
        </${2:div}>
    )
};

export { ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}, type ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props };
```

# React Hooks Snippets

## `usest,useSt,usestate,useState`: React useState hook

> Create a useState hook with type inference

```tsx
const [${1:var}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:undefined});$0
```

---

## `useef,useEff,useEffect`: React useEffect hook

> Create a useEffect hook with type inference

```tsx
useEffect(() => {
    $1
    return () => {$2}
}, [${3}]);$0
```

## `memo,usem,usemem,usememo,useM,useMem,useMemo`: React useMemo hook

> Create a useMemo hook with type inference

```tsx
const ${1:memoized} = useMemo(() => {
    return $2;
}, [${3}]);$0
```

## `usec,useC,usecall,useCall,useCa,useCallb,useCallback`: React useCallback hook

> Create a useCallback hook with type inference

```tsx
const ${1:callback} = useCallback(() => {
    $2
}, [${3}]);$0
```
