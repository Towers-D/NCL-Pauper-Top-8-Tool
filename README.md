# NCL-Pauper-Top-8-Tool

Tool available at: https://towers-d.github.io/NCL-Pauper-Top-8-Tool/

Entirely locally run website that will generate Round 1 pairings based on the formula below (see #Formula).

This is to guarentee that the top-4 players in the league will randomly play against the bottom 4.

## Forumla
- Place #1 in Group A.
- Place #2 in Group B.
- Randomly assign #3 and #4 to groups C and D respectively.
- Randomly select one of bottom 4 (#5-8) to face #2 (place in group B)
- Total the sum of the ranking in Group B and D subtract this from 18 (18 - Sum(GroupB:GroupD)), add this position to Group D.
- Randomly assign remaining two players to Groups A and C.

## Tournament Structure
The winner of Group A will play against the winner of Group C.
The winner of Group B will play against the winner of Group D.

```
Group A                               Group B
        \                           /
          SemiAC -> Final <- SemiBD
        /                           \
Group C                               Group D
```