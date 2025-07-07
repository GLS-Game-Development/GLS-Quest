'''mermaid
flowchart TD

  A[Apresentação da história]
  B{{Escolha de Classe}}
  C((Combatente))
  D((Tanque))
  E((Ladino))
  F((Suporte))
  G[Levados a masmorra por um mago]
  H[Primeiro andar]
  I[Proximo andar]
  J[Quinto andar]
  K[Combate dragão guardião]
  L[Dragão Derrotado]
  M[Recompensas e Pista de Origem da masmorra]
  N[Ultimo Andar]
  O[Combate com Boss Final]
  P[Maga derrotada e Portal se fecha]
  Q((Combate ))
  R((Puzzle))
  S{Exploração}
  T[ Fim de jogo + Créditos]
  
A --> B
B --> CS --> 
R --> I
 --> I
I --> 
I --> 
I --> 
I --> R
R --> J
 --> J
J --> 
B --> D  
B --> E
B --> F
C --> G
D --> G
E --> G
F --> G
G --> H
H --> S
S --> R
R --> I
I --> S
S --> I
I --> S
S --> I
I --> S
S --> R
R --> J
J --> S
S --> K
K --> L
L --> M
M --> I
I --> S
S --> I
I --> S
S --> R
R --> I
I --> S
S --> I
I --> S
S --> N
N --> S
S --> R
R --> O
O --> P
P --> T

