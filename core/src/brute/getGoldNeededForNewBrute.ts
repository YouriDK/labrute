import { Brute, User } from '@labrute/prisma';
import { NEW_BRUTE_BASE_COST } from '../constants';

// Base cost + 1/3 of the base cost for each brute after the 3rd one
export const getGoldNeededForNewBrute = (
  user: Pick<User, 'bruteLimit'> & {
    brutes: Pick<Brute, 'id'>[];
  },
) => (user.brutes.length < user.bruteLimit
  ? 0
  : Math.round(
    NEW_BRUTE_BASE_COST
    + Math.max(user.brutes.length - 3, 0) * NEW_BRUTE_BASE_COST * (1 / 3)
  ));
