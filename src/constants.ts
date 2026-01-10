import { type InjectionKey, type Ref } from 'vue';
import type { IProfile } from './types';

export const profileProvide: InjectionKey<Ref<IProfile>> = Symbol('profile');
