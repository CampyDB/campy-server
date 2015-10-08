# MIST `markers` files go here

MIST `markers` file describing a MIST in silico assay:

```
marker Name	Test Name	Test Type	Forward Primer	Reverse Primer	Amplicon Size (bp)	Amplicon Range Factor (e.g. 0.1)	Allelic Database Filename	Repeat Size (bp)
PURE	MLST	1			-1	0	PURE.fasta	0
SUCA	MLST	1			-1	0	SUCA.fasta	0
THRA	MLST	1			-1	0	THRA.fasta	0
AROC	MLST	1			-1	0	AROC.fasta	0
DNAN	MLST	1			-1	0	DNAN.fasta	0
HEMD	MLST	1			-1	0	HEMD.fasta	0
HISD	MLST	1			-1	0	HISD.fasta	0
```

Snippet from accompanying `MLST.txt` file describing other results that can be inferred from the MIST assay:

```
ST	EBG	AROC	DNAN	HEMD	HISD	PURE	SUCA	THRA
1	13	1	1	1	1	1	1	5
2	13	1	1	2	1	1	1	5
3	13	1	1	2	1	1	1	9
4	40	43	41	16	13	34	13	4
5	2	16	43	45	43	36	39	42
```
