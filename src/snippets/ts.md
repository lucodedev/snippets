---
title: TypeScript and React Typescript Snippets
---

---

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

---

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
