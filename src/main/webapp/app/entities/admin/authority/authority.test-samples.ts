import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8256d1a2-f08a-4dcd-852c-7576c457c36b',
};

export const sampleWithPartialData: IAuthority = {
  name: '81736bbe-eadc-49af-84f1-9feb226cac47',
};

export const sampleWithFullData: IAuthority = {
  name: '615ca793-f2d6-4bed-a692-30f0b692aad1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
