import { VNode } from 'preact';

export default function renderToString<P = {}>(vnode: VNode<P>, context?: any): string;

export function render<P = {}>(vnode: VNode<P>, context?: any): string;
export function renderToString<P = {}>(vnode: VNode<P>, context?: any): string;
export function renderToStaticMarkup<P = {}>(vnode: VNode<P>, context?: any): string;
