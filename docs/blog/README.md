# Blog: prompts per scrivere gli articoli

Prompt da incollare in una chat AI (per esempio Duck.ai, modello con ragionamento) per scrivere gli articoli del
blog di GiordyTech. Il blog ha due serie:

| Serie | Per chi | Scopo |
| --- | --- | --- |
| `lezioni-base` | Chi usa poco il computer, per esempio adulti o anziani alle prime armi | Insegnare una cosa alla volta e proporre le lezioni di persona |
| `fai-da-te` | Chi ha un po' di pratica e vuole provare da solo | Spiegare onestamente come si fa e quando è meglio affidarsi a un tecnico |

## Come si usano

Le chat AI non ricordano le conversazioni precedenti, quindi ogni nuova chat riparte da capo.

1. Apri una nuova chat e incolla [`a-house-style.md`](prompts/a-house-style.md). L'AI risponde "Pronto".
2. Per scegliere gli argomenti: incolla [`b-editorial-plan.md`](prompts/b-editorial-plan.md), indicando la serie.
   Basta farlo una volta per serie.
3. Per scrivere un articolo: incolla [`c1-lezioni-base.md`](prompts/c1-lezioni-base.md) oppure
   [`c2-fai-da-te.md`](prompts/c2-fai-da-te.md), sostituendo le parti tra parentesi quadre.
4. Un articolo per chat dà risultati più costanti: per il successivo, ricomincia dal punto 1.

## Prima di pubblicare

- Ogni articolo termina con un elenco **"Da verificare"**: le affermazioni tecniche che l'AI non dà per certe.
  Controllale tutte, soprattutto nella serie `fai-da-te`, dove un passaggio sbagliato può danneggiare un
  dispositivo. Poi togli l'elenco.
- Gli articoli non contengono recapiti: il sito li aggiunge da solo sotto ogni articolo, così restano in un
  posto solo.
- L'intestazione di ogni articolo (`title`, `description`, `slug`, `series`) è il formato che la sezione blog
  del sito leggerà. La sezione blog non è ancora costruita.
