/* eslint-disable no-void */
import { TreatStep } from '@labrute/core';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import { displayHeal } from './utils/displayHeal';
import findFighter, { AnimationFighter } from './utils/findFighter';

export const treat = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TreatStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const pet = findFighter(fighters, step.t);
  if (!pet) {
    throw new Error('Pet not found');
  }

  const animationEnded = brute.animation.waitForEvent('eat:end');

  // Set brute animation to `eat`
  brute.animation.setAnimation('eat');

  // Play eat SFX
  void sound.play('skills/tamer', {
    speed: speed.current,
  });

  displayHeal(app, pet, step.h, speed);

  // Wait for animation to complete
  await animationEnded;
};
