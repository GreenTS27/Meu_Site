

**Livro Eletromagnetismo:** Griffiths, Introduction to Electrodynamics

- **Por fazer**
    
    - Partícula em movimento - Mudança de referencial
    
      
    
    Griffiths
    
    - Polarização - Ver cap 4 do Griffiths
    - Magnetização - Ver cap 6 do Griffiths
    - Eletrodinâmica na matéria, cena de engenheiros, falta muita coisa daí - ver cap 7 do Griffiths

---

# 1. Eletrostática e Magnetostática

## Eletrostática - $\vec E(\vec r)$﻿

---

Cargas estacionárias originam Campos Elétricos, $\vec E$﻿, constantes. Ou seja, Campos Elétricos que não variam o tempo  
A este caso chamamos  
**Eletrostática**.

---

**Lei de Coulomb**

$\vec F_e \ =\ \frac{1}{4\pi\epsilon_0}\frac{q_1q_2}{R^2} (\hat R) \ = \ q \vec E$

$\nabla \cdot \vec E = \frac{\rho}{\epsilon_0}$

**Discrete charge distribution**

$\vec E(\vec r) \equiv \frac{1}{4\pi\epsilon_0} \sum_{i=1}^n \frac{q_i}{r_i^2} \ (\hat{r_i})$

$\nabla \times \vec E = \vec 0$

**Continuos Charge Distribution**

$\vec E(\vec r) \equiv \frac{1}{4\pi\epsilon_0} \int\frac{1}{r^2} \ dq \ (\hat{r})$

### Princípio da sobreposição

![[Notion/Eletromagnetismo/Untitled.png|Untitled.png]]

### Lei de Coulomb - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec F_e$﻿

Electric Force on a point charge $q_2$﻿ due to a single point charge $q_1$﻿

$\vec F_e = \frac{1}{4\pi\epsilon_0}\frac{q_1q_2}{R^2} (\hat R)$

Isto sendo que $\vec R \equiv \vec r - \vec r \ '$﻿

$\vec F_e = q\vec E$

Limitações da lei de Coulomb:

1. As cargas devem ter uma distribuição esfericamente simétrica (por exemplo, cargas pontuais ou uma esfera de metal carregada).
2. As cargas não devem se sobrepor (por exemplo, devem ser cargas pontuais distintas).
3. As cargas devem ser estacionárias uma em relação à outra.

### Lei de Gauss

Para qualquer superfície fechada,

$\oint \vec E \cdot d\vec A_{sup} = \frac{Q_{int}}{\epsilon_0}$

$\nabla \cdot \vec E = \frac{\rho}{\epsilon_0}$

### Distribuições contínuas de carga - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\lambda, \sigma, \rho$﻿

---

Se a carga estiver distribuída continuamente por uma região, então :

$\vec E(\vec r) = \frac{1}{4\pi\epsilon_0}\int \frac{1}{R^2} dq\;(\hat R)$

---

Campo elétrico dum **fio carregado**:

$\vec E_{fio}(\vec r) = \frac{1}{4\pi\epsilon_0}\int \frac{\lambda(r')}{R^2} dl'\;(\hat R)$

Campo elétrico duma **superfície carregada**:

$\vec E_{sup}(\vec r) = \frac{1}{4\pi\epsilon_0}\int\int \frac{\sigma(r')}{R^2} dA_{sup}'\;(\hat R)$

Campo elétrico dum **volume de carga**:

$\vec E_{vol}(\vec r) = \frac{1}{4\pi\epsilon_0}\int\int\int \frac{\rho(r')}{R^2} dV' \;(\hat R)$

## Potencial elétrico - $V$﻿

---

**Electric potential** is defined as the amount of [work](https://www.wikiwand.com/en/Work_(physics)) energy needed per unit of [electric charge](https://www.wikiwand.com/en/Electric_charge) to move the charge from a reference point to a specific point in an electric field.  
More precisely, the electric potential is the energy per unit charge, for a   
[test charge](https://www.wikiwand.com/en/Test_charge) that is so small that the disturbance of the field under consideration is negligible.  
The motion across the field is supposed to proceed with negligible acceleration, so as to avoid the test charge acquiring kinetic energy or producing radiation.  
By definition, the electric potential at the reference point is zero units. Typically, the reference point is   
[earth](https://www.wikiwand.com/en/Earth_(electricity)) or a point at [infinity](https://www.wikiwand.com/en/Infinity), although any point can be used.

---

Uma vez que, na eletrostática, $\nabla \times \vec E = \vec 0$﻿, então

$\vec E = - \nabla V$

$V(\vec r) \equiv - \int_{\mathcal O}^r \vec E \cdot \ d\vec l$

where $\mathcal O$﻿ is some standard reference point

---

==**Electric Potential**== - $V(r)$﻿

O potencial elétrico gerado por uma carga pontual $q$﻿ a uma distância $r $﻿ é, a menos de uma constante arbitrária, dado por:

$V (r)= \frac{1}{4\pi\epsilon_0}\frac {q}{r}$

and for a volume charge

$V(\vec r) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec r \ ')}{r} \ d V_{\text{olume}}$

---

==**Electric Potential Energy**== - $U(r)$﻿

Usando uma carga de prova $q$﻿, e medindo a **energia potencial elétrica**, $U$﻿, adquirida por ela, conseguimos determinar o potencial elétrico $V$﻿

$U(r) = qV(r)$

  

and for a continuos charge distribution

$U= \frac{1}{2} \int \rho V \ dV_{olume}$

$U = \frac{\epsilon_0}{2} \int_{\text{all space}} E^2 \ dV_{olume}$

### Equação de Poisson

- Dedução da eq. de Poisson
    
    Se $\vec J = \vec 0 $﻿ e $\vec B = \vec 0$﻿ , então $\vec E = \vec E(\vec r)$﻿ e $\rho = \rho(\vec r)$﻿  
    Pelo que as equações de Maxwell ficam :  
    
    $\begin{split}$
    
    Ao juntar estas duas equações obtemos a equação de Poisson
    

**Equação de Poisson**

$\nabla^2 V = -\frac{\rho}{\epsilon_0}$

**Equação de Laplace**

$\nabla^2 V = 0$

  

==**Solution**== ==**Poisson**== **equation**

Sabemos que

$\begin{split}$

Pelo que a **solução da equação de Poisson** é

$\begin{split}$

Daqui retiramos também que

$\vec E = -\nabla V = \frac{1}{4\pi\epsilon_0} \int\rho(\vec r')\frac{\vec r - \vec r'}{|\vec r - \vec r'|^3} \; d^3r'$

  

---

## Dipolo Elétrico

---

The **electric dipole moment** is a measure of the separation of positive and negative [electrical charges](https://www.wikiwand.com/en/Electrical_charge) within a system:  
that is, a measure of the system's overall   
[polarity](https://www.wikiwand.com/en/Chemical_polarity). 

Theoretically, an electric dipole is defined by the first-order term of the [multipole expansion](https://www.wikiwand.com/en/Multipole_expansion);  
it consists of two equal and opposite charges that are infinitesimally close together, although real dipoles have separated charge.  

---

Often in physics, the dimensions of an object can be ignored so it can be treated as a pointlike object, i.e. a [point particle](https://www.wikiwand.com/en/Point_particle).  
Point particles with   
[electric charge](https://www.wikiwand.com/en/Electric_charge) are referred to as [point charges](https://www.wikiwand.com/en/Point_charge).

Two point charges, one with charge $+q$﻿ and the other one with charge $−q$﻿ separated by a distance _$d$_﻿, constitute an _**electric dipole**_ (a simple case of an [electric multipole](https://www.wikiwand.com/en/Multipole_expansion)).

**Electric dipole moment**

$\vec p = q \vec d$

$\vec p \equiv \int_V \vec r\ ' \rho(\vec r \ ') \ d^3 \vec r\ '$

**Energy and Torque**

$U = -\vec p \cdot \vec E$

$\vec T = \vec p \times \vec E$

**Potential and Field**

$V_{dip} (\vec r) = \frac{1}{4\pi\epsilon_0} \frac{\vec p \cdot \hat r}{r^2}$

$\vec E_{dip}(r, \theta) = \frac{p}{4\pi\epsilon_0 r^3}\left[ 2\cos\theta (\hat r) + \sin \theta (\hat \theta) \right]$

$\vec E_{dip}(\vec r) = \frac{1}{4\pi\epsilon_0} \frac{1}{r^3} \left[ 3(\vec p \cdot \hat r)\hat r - \vec p \ \right]$

## Correntes - $\vec I, \vec K \text{ e } \vec J$﻿

**Corrente** - $I$﻿

$I \equiv \frac{dQ}{dt}$

$\vec I_{fio} = \lambda \vec v$

**Densidade Superficial Corrente** - $K$﻿

$\vec K \equiv \frac{d\vec I}{dl_\perp}$

$\vec K = \sigma \vec v$

**Densidade Corrente** - $J$﻿

$\begin{split}$

**Eq. Continuidade**/**Conservação carga**

$\nabla \cdot \vec J = -\frac{\partial \rho}{\partial t}$

### Corrente - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$I$﻿

Fluxo de cargas

$I = \frac{dQ}{dt}$

Para um fio condutor com carga linear $\lambda$﻿,

$\vec I = \frac{d Q}{dt}\hat I = \frac{d\vec x}{dx}\frac{dQ}{dt} = \frac{dQ}{dx}\frac{d\vec x}{dt} = \lambda \vec v$

### Densidade superficial de corrente - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$K$﻿

Fluxo de cargas numa superfície, Corrente por unidade de largura

$\vec K \equiv \frac{d\vec I}{dl_\perp}$

Sendo que, $dl_\perp$﻿ representa uma porção da largura cuja corrente está a atravessar, é perpendicular ao fluxo das cargas (corrente).

Se a **densidade de carga superficial (em movimento) for** **$\sigma$**﻿ e a sua **velocidade for** **$\vec v$**﻿ , então

$\vec K = \sigma \vec v$

### Densidade de corrente - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$J$﻿

A densidade de corrente, $J$﻿, é a quantidade de corrente que atravessa uma unidade de área.

Ou seja, é o fluxo de cargas por unidade de área

$\begin{split}$

- $\vec J = \rho \vec v $﻿, fluido carregado com velocidade $\vec v$﻿

- **==Equação de continuidade==** **-** ==**Conservação de carga**==
    
    Uma vez que a **carga é conservada**, a densidade de corrente tem que satisfazer a **equação de continuidade**.
    
    $\nabla \cdot \vec J = -\frac{\partial \rho}{\partial t}$
    
    ![[Notion/Eletromagnetismo/Untitled 1.png|Untitled 1.png]]
    
    Estas equações são sempre verdadeiras para qualquer meio.
    

  

## Polarização - incompleto

**Correntes - J**

- **Free charge** - As cargas livres não têm necessariamente que se mover, mas podem fazê-lo livremente por todo o material sem estarem presas a outras cargas.
- **Bound charge** - As cargas ligadas não se movem pelo material, pois estão ligadas ao mesmo. O que podem fazer é oscilar, criando assim um campo elétrico.

$\vec{J} = \vec{J_f} + \vec{J_b}$

- Densidade de corrente livre
    
    $\vec{J_f} = \sigma \vec{E}$
    
    em que $\sigma$﻿ é a condutividade dum meio. Condutor perfeito $\sigma = +\infty$﻿ , isolador $\sigma = 0$﻿
    
- Densidade de corrente ligada
    
    $\begin{split}$
    
    $P $﻿ é a densidade de momentos de dipolos elétricos permanentes ou induzidos num material dielétrico, sendo que $p $﻿ é o momento dipolar.
    
    $\vec P = \frac{d\vec p}{dV}$
    
    $M $﻿ é o mesmo que $P $﻿ só que para a magnetização, sendo que $m$﻿ é o momento dipolar magnetico.
    
    $\vec M = \frac{d\vec m}{dV}$
    
- Corrente de deslocamento
    
    In a dielectric material, the presence of an electric field **E** causes the bound charges in the material (atomic nuclei and their electrons) to slightly separate, inducing a local electric dipole moment. The electric displacement field "**D**"
    
    $\vec D \equiv \epsilon_0\vec E + \vec P$
    
    $\vec{J_D} = \frac{\partial \vec D}{\partial t}$
    

### Campo H , Campo D - vazio

---

## Magnetostática - $\vec B(\vec r)$﻿

---

Correntes estacionárias originam Campos Magnéticos, $\vec B$﻿, constantes.  
A este caso chamamos  
**Magnetostática**.

---

**Lei de Biot-Savart**

$\vec B =\frac{\mu_0}{4\pi} \int \frac{I }{ r^3} d\vec l \times \vec r$

$\nabla \cdot \vec B =0$

$\nabla \times \vec B = \mu_0 \vec J$

$\vec F_{mag} = q (\vec v \times \vec B)$

### Força de Lorentz

$\vec F_{\text{Lorentz}} = \vec F_e + \vec F_m$

$\vec F_L = q(\vec E + \vec v \times \vec B)$

### Lei de Biot-Savart - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$B_{fio}$﻿

---

The **Biot–Savart law** is the equation that describes the [magnetic field](https://www.wikiwand.com/en/Magnetic_field), $\vec B$﻿,  generated by a constant [electric current](https://www.wikiwand.com/en/Electric_current), $\vec I$﻿.

---

So, the magnetic field of a steady line current is given by the Biot-Savart law:

$\vec B =\frac{\mu_0}{4\pi} \int \frac{I d\vec l \times \hat r}{||\vec r||^2}dr$

$\vec B =\frac{\mu_0}{4\pi} \int \frac{(\vec J dV) \times \hat r}{||\vec r||^2}dr$

### Força magnética num fio portador de corrente - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$F_{mag}$﻿ line

$\vec F_{mag} = \int(\vec v \times \vec B) \ dq = \int(\vec v \times \vec B) \lambda\ dl = \int(\vec I \times \vec B) \ dl$

$\vec F_{mag} = \ I \int(d\vec l \times \vec B)$

### Lei de Ampère

$\nabla \times \vec B = \mu_0 \vec J$

Aplicando o teorema de Stokes obtemos

$\oint \vec B \cdot d\vec l = \mu_0 \int \vec J \cdot d\vec A_{\text{sup.}} $

Sabemos que $\int \vec J \cdot d\vec A_{\text{sup.}} $﻿ representa a corrente que atravessa uma superfície, ou corrente interna à curva fechada, $I_{\text{int}}$﻿.  
Pelo que obtemos,  

$\oint \vec B \cdot d\vec l = \mu_0 I_{\text{interna}} $

### Potencial vetor magnético - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec A$﻿

Um **potencial vetor** é uma campo vetorial $\vec A$﻿, com diferenciabilidade $C^2 $﻿, tal que o campo vetorial $\vec v $﻿ é dado por

$\vec v = \vec \nabla \times \vec A$

Uma vez que $\nabla \cdot \vec B = 0 $﻿, então podemos definir o  
  
**potencial vetor magnético** como

$\nabla \times \vec A \equiv \vec B$

  

$\nabla \cdot \vec A = 0$

$\nabla^2\vec A = - \mu_0 \vec J$

$\vec A (\vec r) = \frac{\mu_0}{4\pi} \int \frac{\vec J(\vec r ´)}{r} \ dV_{ol}$

---

## Dipolo Magnético

---

In [electromagnetism](https://www.wikiwand.com/en/Electromagnetism), a **magnetic dipole** is the limit of either a closed loop of [electric current](https://www.wikiwand.com/en/Electric_current) or a pair of poles as the size of the source is reduced to zero while keeping the [magnetic moment](https://www.wikiwand.com/en/Magnetic_moment) constant.

The **[magnetic field](https://www.wikiwand.com/en/Magnetic_field)** due to natural magnetic dipoles (upper left), [magnetic monopoles](https://www.wikiwand.com/en/Magnetic_monopole) (upper right), an [electric current](https://www.wikiwand.com/en/Electric_current) in a circular loop (lower left) or in a [solenoid](https://www.wikiwand.com/en/Solenoid) (lower right). All generate the same field profile when the arrangement is infinitesimally small.

---

O momento magnético $\vec{m}$﻿ de uma distribuição de corrente pode ser calculado usando a relação:

$\vec{m} = \frac{1}{2} \int \vec{r} \times \vec{J} \, dV$

onde:

- $r$﻿ é o vetor posição do elemento de volume $dV$﻿,
- $\vec{J}$﻿ é a densidade de corrente no volume.

  

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/VFPt_dipoles_magnetic.svg/640px-VFPt_dipoles_magnetic.svg.png)](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/VFPt_dipoles_magnetic.svg/640px-VFPt_dipoles_magnetic.svg.png)

The **[magnetic field](https://www.wikiwand.com/en/Magnetic_field)** due to natural magnetic dipoles (upper left), [magnetic monopoles](https://www.wikiwand.com/en/Magnetic_monopole) (upper right), an [electric current](https://www.wikiwand.com/en/Electric_current) in a circular loop (lower left) or in a [solenoid](https://www.wikiwand.com/en/Solenoid) (lower right).  
All generate the same field profile when the arrangement is infinitesimally small.  

**Momento Dipolar Magnético** - $m$﻿

$m \equiv I \int d\vec A_{rea} = I \vec a$

$\vec A_{dip}(\vec r) = \frac{\mu_0}{4\pi} \frac{\vec m \times \hat r}{r^2}$

$\vec B_{dip} (\vec r) = \frac{\mu_0}{4\pi} \frac{1}{r^3} \left[ 3(\vec m \cdot \hat r)\hat r - \vec m \right]$

### Magnetização - incompleto

---

## Equações de Maxwell

==**Fórmula geral**== - **Eletrostática**

**Gauss’s Law**

$\begin{split}$

No name

$\begin{split}$

**Faraday’s law**

$\begin{split}$

**Ampère’s law** (with Maxwell’s correction)

$\begin{split}$

- $\mu_0\epsilon_0 = 1/c^2$﻿
- Truque: $+ \nabla \cdot \vec B = + 0$﻿

### Vácuo - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\rho = 0$﻿ e @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec J = \vec 0$﻿

**Gauss’s Law**

$\nabla\cdot\vec E = 0$

  

No name

$\nabla\cdot\vec B = 0 $

**Faraday’s law**

$\nabla\times\vec E = -\frac{\partial\vec B}{\partial t} $

**Ampère’s law** (with Maxwell’s correction)

$\nabla\times\vec B = \frac{1}{c^2}\frac{\partial\vec E}{\partial t} \\$

# 2. Eletrodinâmica (e Magnetodinâmica)

---

A grande diferença entre **Eletrostática** e **Eletrodinâmica**, é que  
em Eletrodinâmica tanto o  
**Campo Elétrico**, $E$﻿, como o **Magnético**, $B$﻿, **variam com o tempo**.

A variação da intensidade do campo elétrico no tempo, $\vec E(t)$﻿ cria um Campo Magnético, ou seja, induz um Campo Magnético.

A variação da intensidade do campo magnético no tempo, $\vec B(t)$﻿ cria um Campo Elétrico, por indução.

---

## Introdução - Leis base

---

**Lei de Ohm**

$\vec J = \sigma\vec E$

$V=RI$

  

**Lei de Faraday**

$\oint \vec E \cdot d\vec l = -\int\int \frac{\partial \vec B}{\partial t} \cdot d\vec A_{sup}$

$\nabla \times \vec E = - \frac{\partial \vec B}{\partial t}$

---

### ==Equações== de ==Maxwell -== **Forma geral**

**Gauss’s Law**

$\begin{split}$

No name

$\begin{split}$

  

**Faraday’s law**

$\begin{split}$

**Ampère’s law** (with Maxwell’s correction)

$\begin{split}$

---

### Lei de Ohm

$\vec J = \sigma \vec f$

- $\vec J \equiv$﻿ current density
- $\sigma \equiv$﻿ conductivity of the medium ( related to the resistivity, $\rho$﻿, of the medium $\rho = 1/\sigma$﻿ )
- $\vec f \equiv \vec F / q$﻿ , force per unit charge

  

We know that the Lorentz Force is $\vec F_L = q(\vec E + \vec v \times \vec B)$﻿, so

$\vec F_L = q(\vec E + \vec v \times \vec B) \\$

  

Normally the velocity of the charges is small enough to be ignored, so we obtain the **Ohm’s Law**

$\vec J = \sigma\vec E$

The more familiar version of Ohm’s law is

$V = RI$

- $V \equiv $﻿ Potential difference between electrodes (for example)
- $R \equiv$﻿ Resistance; it’s a function of the geometry of the arrangement and the conductivity of the medium between the electrodes
- $I \equiv$﻿ Total Current flowing from one electrode to the other

### Lei de Faraday

A variação temporal do fluxo magnético é dada por

$\frac{d\Phi}{dt} = \int\int \frac{\partial \vec B}{\partial t} \cdot d\vec A_{sup}$

A variação do campo magnético, $\vec B(t)$﻿, cria, por indução, um campo elétrico $\vec E$﻿, pelo que obtemos a forma integral da **Lei de Faraday**

$\oint \vec E \cdot d\vec l = -\int\int \frac{\partial \vec B}{\partial t} \cdot d\vec A_{sup}$

Aplicando o teorema de Stokes ficamos com a **forma diferencial** desta lei:

$\nabla \times \vec E = - \frac{\partial \vec B}{\partial t}$

É este campo elétrico induzido que é responsável pela força eletromotriz $\mathcal E $﻿

$\mathcal E = \oint\vec E \cdot d\vec l = -\frac{d\Phi}{dt}$

Isto, sendo que $\Phi \equiv$﻿ fluxo do campo magnético, $B$﻿

## Leis de Conservação

---

**Equação de** ==**continuidade de carga**==

$\frac{\partial \rho }{\partial t} = - \nabla \cdot \vec J$

**Vetor** ==**Poynting**==

$\vec S = \frac{1}{\mu_0} ( \vec E \times \vec B )$

**Densidade do** ==**momento**== **eletromagnético**

$\vec g = \frac{1}{c^2}\ \vec S$

**Densidade** ==**Energia**== **Eletromagnética**

$u_{em} = \frac{1}{2}\left[ \epsilon E^2 + \frac{1}{\mu} B^2 \right]$

**Teorema de** ==**Poynting**==

$\nabla \cdot \vec S = - \frac{\partial u }{\partial t} - \vec J \cdot \vec E $

==**Momento**== **eletromagnético**

$\begin{split}$

---

### Densidade Energia Eletromagnética - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$u_{em}$﻿

---

**Total electromagnetic Energy** - $U_{em}$﻿

$U_{em} = \int u_{em} \ dV$

---

A ==**densidade de energia eletromagnética**== para **meios lineares** e **não dispersivos** é dada por,

$u = \frac{1}{2}\left[ \vec E \cdot \vec D + \vec B \cdot \vec H \right]$

Isto, sendo que :

$\vec E \cdot \vec D$﻿ - represents the electromagnetic energy flow into a small volume;

$\vec B \cdot \vec H$﻿ - subtracts the work done by the field on free electrical currents, which thereby exits from electromagnetic energy as dissipation, heat, etc.

Para além disso, se o ==**meio**== **fosse** ==**Linear, Não Dispersivo e Isotrópico**==, terámos que $\vec D = \epsilon \vec E$﻿ e que $\vec B = \mu \vec H$﻿, portanto ficaríamos com

$u = \frac{1}{2}\left[ \epsilon E^2 + \frac{1}{\mu} B^2 \right]$

Assim, ==no vazio== obteríamos que

$u = \frac{1}{2}\left[ \epsilon_0 E^2 + \frac{1}{\mu_0} B^2 \right]$

### Vetor Poynting - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec S$﻿

---

O vetor Poynting representa a Energia por unidade de tempo, por unidade de area, transportada pelos campos.

Pelo que $S$﻿ é a intensidade do fluxo de energia eletromagnética,  
e  
$\hat S$﻿ é a direção desse fluxo

---

$\vec S =\frac{E_{em}}{t\cdot A} = \vec E \times \vec H$

No ==**vácuo**== temos que $\vec H = \frac{1}{\mu_0}\vec B$﻿ , portanto ficamos com

$\vec S \equiv \frac{1}{\mu_0} ( \vec E \times \vec B )$

**Teorema de** ==**Poynting**==

$\nabla \cdot \vec S = - \frac{\partial u }{\partial t} - \vec J \cdot \vec E \\$

Se estivermos no vazio, então não há cargas no volume $V$﻿, pelo que

$\int_V \vec J \cdot \vec E \ dV = \frac{dW}{dt} =0$

Ou seja, obtemos uma ==**equação de continuidade**== como caso especial do teorema de Poynting:

$\nabla \cdot \vec S = - \frac{\partial u }{\partial t}$

### Potência - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$P$﻿

A **Potência** que flui através duma região é dada pela quantidade de fluxo eletromagnético, $\vec S$﻿, que atravessa uma dada superfície, $A$﻿.  
Ou seja,  

$P_T = \int_A \vec S \cdot d\vec A$

$P = \frac{dW}{dt}$

### Tensor das Tensões de Maxwell - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\overleftrightarrow T$﻿

---

Physically, $\overleftrightarrow T$﻿ is the force per unit area (or stress) acting on the surface.  
More precisely,  
$T_{ij}$﻿ is the force (per unit area) in the $i$﻿th direction acting on an element of surface oriented in the $j$﻿th direction

- “diagonal” elements $(T_{xx} , T_{yy} , T_{zz} )$﻿ represent pressures,
- “off-diagonal” elements $(T_{xy} , T_{xz} , etc.)$﻿ are shears.

As componentes são dadas por

$T_{ij} = \epsilon_0 E_iE_j $

$\overleftrightarrow{T} = $

---

The total electromagnetic Force applied on the charges in a volume $V$﻿ is

$\vec F = \oint_A \overleftrightarrow{T} \cdot d\vec a -\frac{1}{c^2} \ \frac{d}{dt}\int_V \vec S \ dt$

in the static case:

$\vec F = \oint_A \overleftrightarrow{T} \cdot d\vec a $

---

  

### Momento eletromagnético - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec g, \vec p_{em}$﻿

**Densidade do momento eletromagnético**

$\vec g = \frac{1}{c^2} \vec S$

  

**Momento eletromagnético**

$\begin{split}$

  

**Equação de continuidade para o momento eletromagnético**

$\frac{\partial \vec g}{\partial t} = \nabla \cdot \overleftrightarrow T$

==**Momento**== ==**Mecânico**== (duma carga) - $\vec p_{mec}$﻿

$\begin{split}$

$\begin{split}$

  

==**Momento**== **linear** ==**Eletro**====**magnético**== **-** $\vec p_{em}$﻿

$\begin{split}$

No vácuo temos que $\vec S = \frac{1}{\mu_0}\vec E \times \vec B$﻿, pelo que

$\vec p_{campo} = \frac{1}{\mu_0 c^2} \iiint_Q \vec E \times \vec B \; dV $

  

A ==**equação de conservação**== **do** ==**momento**== para cada ==**componente**== ==$i$==﻿ é

$\begin{split}$

### Momento angular eletromagnético - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec L$﻿

Em Mecânica Clássica o momento angular é dado por $\vec L = \vec r \times \vec p$﻿

A **densidade do momento angular** eletromagnético é definida como

$\vec \ell = \vec r \times \vec g$

E o **momento angular total** , eletromagnético, é dado por

$\vec L = \int \vec \ell \ dV$

Assim,

$\begin{split}$

Também da Mecânica Clássica sabemos que o Torque é dado por $\vec T = \vec r \times \vec F$﻿,  
pelo que  

$\vec L = \int \vec T \ dt$

## Ondas eletromagnéticas

---

- **Uma onda** **é** uma perturbação num meio contínuo que se propaga com uma forma fixa e a uma velocidade constante
- **Onda harmónica** é uma onda com a forma de uma função sinusoidal
- Componente transversal e longitudinal da onda
    - **Onda longitudinal**: tipo de onda que se move na direção de sua propagação. ( ex. : Som )
    - **Onda transversal**: tipo de onda cujo seu movimento é perpendicular à sua direção de propagação. (ex. : água)

---

==**Revisões de Ondas**==

**Wave equation**

$\frac{\partial^2 f}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 f}{\partial t^2}$

  

**Sinusoidal wave** (travelling to the right)

$f(x,t) = A\cos[k(x-vt) + \delta]$

$f(x,t) = A\cos[kx-wt + \delta]$

  

**Sinusoidal wave** (Complex notation)

$\tilde f(z,t) = \tilde A e^{i(kz-wt)}$

Actual wave function is $f = \text{Re}[\tilde f(x,t)]$﻿

$f(x,t) = Ae^{i(kx-wt + \delta)}$

---

==**Ondas Eletromagnéticas**==

**Onda Plana** ==**Eléctrica**==

$\vec{\tilde{E}}(\vec r, t) = \tilde E_0 e^{(\vec k \cdot \vec r - \omega t)i} \left(\hat n\right) $

**Onda Plana** ==**Magnética**==

$\vec{\tilde{B}}(\vec r, t) = $

**Intensidade da Onda**

$I = \langle\ \| \vec S \| \ \rangle$

---

### Ondas Planas Monocromáticas

- Vetor Onda ou Vetor Propagação - $\vec k$﻿
    
    $\vec k = \frac{\omega}{c} \left( \hat k \right)$
    
    sendo que $\hat k$﻿ é a direção de propagação da onda
    
- Direção polarização do campo elétrico $\equiv \hat n$﻿
- Ondas planas
    
    $\begin{split}$
    
    onde $\tilde E_0$﻿ é a amplitude complexa $\left( \textrm{os campos físicos são as partes reais de } \vec{\tilde{E}} \textrm{ e } \vec{\tilde{B}} \right)$﻿
    

### Intensidade - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$I$﻿

A intensidade é o valor médio do módulo de $\vec S$﻿ ao longo dum período , $T = 2\pi/\omega$﻿  
Isto pois os valores do campo variam tão rapidamente que só se deteta a média do mesmo  

$I = \langle \| \vec S \| \rangle$

### Pressão Radiação - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$P_{rad}$﻿

$P_{rad} = \frac{I}{c} = \frac{\langle \| \vec S \| \rangle}{c}= \langle u \rangle$

O valor médio temporal da **Pressão total radiada**

$\langle P_{\;T,\,rad} \rangle = \oiint \langle \vec S \rangle \cdot \hat r \;dA $

A **Potência total** que flui numa região é

$P_T = \iint \vec S \cdot d\vec A$

### Reflexão de Ondas

Suponho que o plano $xy$﻿ forma uma fronteira entre dois meios lineares. Uma onda plana de frequência $\omega$﻿ viaja na direção $z$﻿ e é polarizada na direção $x$﻿. Esta onda é emitida em $z<0$﻿

Assim, tenho as expressões para a

- onda incidente, $i$﻿
    
    $\left\{ $
    

- onda refletida, $r$﻿
    
    $\left\{ $
    
- onda transmitida, $t$﻿
    
    $\left\{ $
    

A Onda Total fica

$\vec E = \left\{ $

- **Reflexão na superfície dum condutor**
    
    Considero um meio 1, em que $z<0$﻿ e um meio 2 em que $z>0$﻿.
    
    **Condições fronteira**
    
    $\begin{align}$
    
    Isto, sendo que
    
    - $\sigma_f \equiv $﻿ carga superficial livre
    - $\vec K_f \equiv $﻿ corrente superficial livre
    - $\hat n \equiv$﻿ direção perpendicular à superfície
    - O $\perp$﻿ e o $\parallel$﻿ referem-se às componentes perpendicular e paralela, em ralação à superfície
    
    Ver equação 7.64 do Griffiths
    
      
    

## Potenciais e Campos

---

**Fields and Potentials**

$\vec B = \nabla \times \vec A$

$\vec E = -\nabla V - \frac{\partial \vec A}{\partial t}$

==**Coulomb**==**’s Gauge**

$\nabla \cdot \vec A = 0$

==**Lorentz**==**’a Gauge**

$\nabla \cdot \vec A + \frac{1}{c^2} \frac{\partial V}{\partial t} = 0$

---

==**Retarded**== ==**time**==

==**Retarded**== ==**Potentials**== - non static sources

$V(\vec r,t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec r',t_r)}{|\vec r - \vec r'|} d^3\vec r'$

$\vec A(\vec r,t) = \frac{\mu_0}{4\pi} \int \frac{\vec J(\vec r',t_r)}{|\vec r - \vec r'|} d^3\vec r'$

  

==**Retarded**== ==**Fields**== - **Jefimenko’s equations**

$\begin{split}$

$\vec B(\vec r,t) = \frac{\mu_0}{4\pi} \int \left[ \left( \frac{\vec J(\vec r',t_r)}{R} + \frac{\dot{\vec J}(\vec r,t_r)}{c} \right) \times \frac{\hat R}{R} \right] d^3\vec r'$

---

==**Moving**== **Point** ==**Charge**==

==**Potentials**== **-** **Liénard-Wiechert Potentials**

$V(\vec r,t) = \frac{1}{4\pi\epsilon_0} \frac{qc}{Rc - \vec R \cdot \vec v}$

$\vec A (\vec r , t) = \frac{\vec v}{c^2} V(\vec r, t)$

==**Fields**==

$\vec E = \frac{q}{4\pi\epsilon_0}\frac{R}{(\vec R \cdot \vec u)^3}\left[ (c^2 - v^2)\vec u + \vec r \times (\vec u \times \vec a) \right]$

$\begin{split}$

  

---

### Campos @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec E$﻿ e @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec B$﻿ em função de Potenciais @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec A$﻿ e @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$V$﻿

- **For the Magnetic field:** in electrodynamics we have the same as in electrostatics, $\nabla \cdot \vec B = 0$﻿, so
    
    $\vec B = \nabla \times \vec A$
    
- **For the Electric Field:** in electrodynamics the rotational of $\vec E$﻿ is no longer zero, so we have to do this a different way.  
    From the equation of Maxwell we know that,  
    
    $\begin{split}$
    
    $\vec E = -\nabla V - \frac{\partial \vec A}{\partial t}$
    

So,

$\begin{split}$

---

Pelas equações de Maxwell sabemos que

$\begin{split}$

Substituindo $E$﻿ e $B$﻿ nas equações de Maxwell, obtemos as **Equações de Maxwell em termos de** **$\vec A$**﻿ **e** **$V$**﻿ :

$\begin{split}$

### Padrão de Coulomb e Padrão de Lorentz

---

Em Física medem-se os Campos, não os Potenciais.

O mesmo campo pode ser obtido através de diferentes potenciais. Desta forma, não interessa, em específico, qual o potencial que usamos desde que o campo obtido seja o mesmo.

Assim, podemos usar o potencial que nos der mais jeito.

É daqui que vêm os **Padrões** de **Coulomb** e de **Lorentz** (também chamados Coulomb gauge e Lorentz gauge).

---

Gauge Transformations

See Griffiths - Chapter 10.1.2

$\vec A ' = \vec A + \nabla$

For any old scalar function $λ(r, t)$﻿, we can, with impunity, add $∇λ$﻿ to $A$﻿, provided we simultaneously subtract $∂λ/∂t$﻿ from $V$﻿.  
This will not affect the physical quantities  
$E$﻿ and $B$﻿.  
Such changes in  
$V$﻿ and $A$﻿ are called gauge transformations.

---

### Padrão de Coulomb

$\nabla \cdot \vec A = 0$

Substituindo nas equações de Maxwell em termos de $\vec A$﻿ e $V$﻿, as quais foram deduzidas acima, temos que:

$\begin{align}$

- Da **primeira equação** concluímos que o potencial elétrico $V$﻿ é dado por :
    
    $V(\vec r,t) = \frac{1}{4\pi\epsilon_0} \int_V \frac{\rho(\vec r',t)}{R} d^3\vec r' \quad , \quad R\equiv |\vec r - \vec r'|$
    
    Pelo que $V$﻿ é instantâneo. Propaga-se com velocidade infinita, pois no instante em que $\rho $﻿ varia $V$﻿ também varia.
    
- Da **segunda equação** concluímos que o potencial vetor magnético $\vec A$﻿ é dado por :
    
    $\vec A(\vec r,t) = \nabla \times \int_{\text{Vol}} \frac{\vec B(\vec r',t)}{4\pi R} d^3\vec r'$
    
    Pelo que $\vec A$﻿ não é instantâneo. Propaga-se com velocidade finita, pois depende de $c$﻿.
    

### Padrão de Lorentz

$\nabla \cdot \vec A + \frac{1}{c^2} \frac{\partial V}{\partial t} = 0$

Substituindo nas equações de Maxwell em termos de $\vec A$﻿ e $V$﻿, foram deduzidas acima, temos que:

$\begin{split}$

### Equações de Maxwell - com Potencias

==**Fórmula geral**==

**Gauss’s Law**

$\begin{split}$

No name

$\begin{split}$

**Faraday’s law**

$\begin{split}$

**Ampère’s law** (with Maxwell’s correction)

$\begin{split}$

### Em função dos Potenciais

**Gauss’s Law**

$\begin{split}$

No name

$\vec B = \nabla \times \vec A$

**Faraday’s law**

$\vec E = -\nabla V - \frac{\partial \vec A}{\partial t}$

**Ampère’s law** (with Maxwell’s correction)

$\begin{split}$

### Potenciais - Padrão Coulomb

**Padrão de Coulomb**

$\nabla \cdot \vec A = 0$

**Equações de Maxwell**

**Gauss’s Law**

$\begin{split}$

No name

$\vec B = \nabla \times \vec A$

**Faraday’s law**

$\vec E = -\nabla V - \frac{\partial \vec A}{\partial t}$

**Ampère’s law** (with Maxwell’s correction)

$\begin{split}$

### Potenciais - Padrão Lorentz

**Padrão de Lorentz**

$\nabla \cdot \vec A + \frac{1}{c^2} \frac{\partial V}{\partial t} = 0$

**Equações de Maxwell**

**Gauss’s Law**

$\begin{split}$

No name

$\vec B = \nabla \times \vec A$

**Faraday’s law**

$\vec E = -\nabla V - \frac{\partial \vec A}{\partial t}$

**Ampère’s law** (with Maxwell’s correction)

$\begin{split}$

**D’Alembertian**

$\begin{split}$

### Potenciais Retardados - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$V (\vec r, t) \ , \ \vec A(\vec r, t)$﻿

---

**==Tempo retardado==** $\equiv t_r$﻿

$t_r = t - \frac{|\vec r - \vec r'|}{c}$

$t_r \equiv$﻿ Instante em que a onda / campo começa a propagar-se

$t \equiv$﻿ Instante em que a onda / campo é medida pelo observador

$\frac{|\vec r - \vec r'|}{c} \equiv$﻿ Intervalo de tempo que a onda / campo demora a chegar até nós

---

**Exemplo:**

Se a velocidade a que a onde/campo se propaga tende-se para $v \rightarrow \infty$﻿, então teríamos o caso em que $\frac{|\vec r - \vec r'|}{v} =0$﻿ , ou seja, receberíamos a informação instantaneamente.  
Isto difere da realidade, em que  
$v \le c$﻿ .

---

**Potential in the static case**

$V(\vec r) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec r')}{|\vec r - \vec r'|} \ d^3\vec r'$

$\vec A(\vec r) = \frac{\mu_0}{4\pi} \int \frac{\vec J(\vec r')}{|\vec r - \vec r'|} \ d^3\vec r'$

- Informação auxiliar sobre $|\vec r - \vec r’|$﻿
    
    $\nabla \left( \frac{1}{|\vec r - \vec r'|} \right) = - \frac{\vec r - \vec r'}{|\vec r - \vec r'|^3}$
    
    $\nabla \cdot \left( \frac{\vec r - \vec r'}{|\vec r - \vec r'|^2} \right) = \frac{1}{|\vec r - \vec r'|^2}$
    
    $\nabla \cdot \left( \frac{\vec r - \vec r'}{|\vec r - \vec r'|^3} \right) = 4\pi \; \delta\left(|\vec r - \vec r'|\right)$
    
      
    

  

**Retarded Potentials** - non static sources

$V(\vec r,t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec r',t_r)}{|\vec r - \vec r'|} d^3\vec r'$

$\vec A(\vec r,t) = \frac{\mu_0}{4\pi} \int \frac{\vec J(\vec r',t_r)}{|\vec r - \vec r'|} d^3\vec r'$

Para além disso, sabemos também que $V $﻿e $\vec A$﻿ respeitam as seguintes condições:

$\left( \frac{1}{c^2} \frac{\partial^2}{\partial t^2} - \nabla^2 \right) V \neq 0$

$\left( \frac{1}{c^2} \frac{\partial^2}{\partial t^2} - \nabla^2 \right) \vec A \neq 0$

  

$\nabla \cdot \vec A + \frac{1}{c^2} \frac{\partial V}{\partial t} = 0$

  

### Equações Jefimenko - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec E(\vec r, t) \ , \ \vec B(\vec r, t)$﻿

---

**==Jefimenko's equations==** give the electric field **$\vec E$**﻿ and magnetic field **$\vec B$**﻿ produced by an arbitrary charge, or current distribution of charge density _$ρ$_﻿_,_ and current density **$J$**﻿**.**

---

Sabemos que as equações de Maxwell na formulação potencial são:

$\vec E (\vec r,t) = -\nabla V - \frac{\partial \vec A}{\partial t}$

  

$\vec B(\vec r,t) = \nabla \times \vec A$

  

Substituindo nas expressões acima, pelos potenciais retardados e usando a relação $c^2 = \frac{1}{\epsilon_0\mu_0}$﻿, temos as **==equações de Jefimenko==**

- Para o **Campo Elétrico**
    
    $\begin{split}$
    
    Isto sendo que $R \equiv |\vec r - \vec r’| $﻿ e que $\hat R = \vec R \backslash R$﻿.
    
- Para o **Campo Magnético**
    
    $\vec B(\vec r,t) = \frac{\mu_0}{4\pi} \int \left[ \left( \frac{\vec J(\vec r',t_r)}{R} + \frac{\dot{\vec J}(\vec r,t_r)}{c} \right) \times \frac{\hat R}{R} \right] d^3\vec r'$
    

### Potenciais Liénard-Wiechert - Carga pontual em movimento

---

Estes são a descrição matemática clássica dos potenciais escalar e vetorial de uma carga pontual em movimento. A sua derivação tem origem nas equações de Maxwell e, portanto, não é válida no domínio da mecânica quântica.

---

- Dedução dos potenciais
    
    A densidade de cargas no instante $t_r$﻿ é:
    
    $\begin{split}$
    
    Agora basta substituir $\rho(\vec r’,t_r)$﻿ nas expressões obtidas para os potenciais retardados, $V $﻿ e $\vec A$﻿.  
    Não esquecendo, no caso de  
    $\vec A$﻿, que $\vec J = \rho \vec v$﻿.
    

  

Os **==potenciais de Liénard-Wiechert==** são dados pelas seguintes equações:

$V(\vec r,t) = \frac{1}{4\pi\epsilon_0} \frac{qc}{|\vec r - \vec w|c - (\vec r - \vec w) \cdot \vec v}$

$\vec A (\vec r,t) = \frac{\mu_0}{4\pi}\frac{qc\vec v}{|\vec r - \vec w|c - (\vec r - \vec w) \cdot \vec v}$

Onde,  
  
$\vec w \equiv $﻿ posição da carga no instante $t_r$﻿  
  
$\vec v \equiv \frac{d\vec w}{dt}$﻿

  

![[Notion/Eletromagnetismo/Untitled 2.png|Untitled 2.png]]

Considering that $\vec R = \vec r - \vec w(t_r) $﻿,  
  
$R_1 = c(t-t_1) $﻿ and $R_2 = c(t-t2)$﻿

Portanto, considerando que $\vec R = \vec r - \vec w(t_r) $﻿ e $R = |\vec r - \vec w(t_r) |$﻿, obtemos a forma simplificada dos **Potenciais de Liénard-Wiechert**

$V(\vec r,t) = \frac{1}{4\pi\epsilon_0} \frac{qc}{Rc - \vec R \cdot \vec v}$

$\vec A (\vec r,t) = \frac{\mu_0}{4\pi}\frac{qc\vec v}{Rc - \vec R \cdot \vec v}$

Pelo que obtemos uma ==**relação entre os dois potenciais**==,

$\vec A (\vec r , t) = \frac{\vec v}{c^2} V(\vec r, t)$

### Campos duma partícula em movimento

Partindo de

$\vec E = - \nabla V - \frac{\partial \vec A}{\partial t} $

Substituímos $V$﻿ e $\vec A$﻿ pelos potencias de Liénard-Wiechert e obtemos:  
(  
==ver dedução== no cap.10.3.2 do Griffiths - Introduction to Electrodynamics )

$\vec E = \frac{q}{4\pi\epsilon_0}\frac{R}{(\vec R \cdot \vec u)^3}\left[ (c^2 - v^2)\vec u + \vec r \times (\vec u \times \vec a) \right]$

Isto sendo que o primeiro termo da equação acima, $(c^2 - v^2)\vec u$﻿, representa o ==**campo de velocidades**== e que o segundo termo, $\vec r \times (\vec u \times \vec a)$﻿, representa o ==**campo de aceleração**==.  
Para além disso, obtemos que:  

$\begin{split}$

Em que,  
  
$\vec R \equiv \vec r - \vec w(t_r) $﻿ , pelo que $\vec v = \dot{\vec w} (t_r)$﻿ , e assim $\vec a = \dot {\vec v}$﻿  
  
$\vec u \equiv c \hat R- \vec v$﻿

==Ver==

## Radiação

---

Capítulo 11 do Griffiths - Introduction to Electrodynamics

A aceleração é uma condição necessária para a radiação, mas não uma condição suficiente, já que simetrias, por exemplo, podem levar ao cancelamento completo dos campos radiativos.

---

**Radiation Power** (passing through the surface of a sphere)

$P =\oint\vec S_{rad}\cdot d\vec A_{sup}$

### Potência da radiação

---

A Potencia (energia por unidade de tempo) que atravessa uma superfície esférica com área $A$﻿, é obtida através do fluxo de onda que atravessa essa mesma superfície, ou seja, o vetor Poynting.

---

- **Dedução**
    
    De , sabemos que o campo duma partícula em movimento é:
    
    $\vec E = \frac{q}{4\pi\epsilon_0}\frac{R}{(\vec R \cdot \vec u)^3}\left[ (c^2 - v^2)\vec u + \vec r \times (\vec u \times \vec a) \right]$
    
    Contudo, apenas o **campo de aceleração** representa a radiação, pelo que o **==campo elétrico de radiação==** é:
    
    $\vec E_{rad} = \frac{q}{4\pi\epsilon_0}\frac{R}{(\vec R \cdot \vec u)^3}\left[ \vec r \times (\vec u \times \vec a) \right]$
    
    Sabemos também que:
    
    $\vec B(\vec r,t) = \frac{1}{c}\hat R \times \vec E(\vec r , t) \qquad , \qquad \vec S = \frac{1}{c} (\vec E \times \vec B)$
    
    Pelo que,
    
    $\vec S_{rad} = \frac{1}{\mu_0c}E_{rad}^2 \hat R$
    
    - Para $v<<c$﻿
        
        $\vec S_{rad} = \frac{\mu_0q^2a^2}{4\pi^2c^2} \left( \frac{\sin^2\theta}{R^2} \right) \hat R$
        
        Potência total radiada é:
        
        $P = \oint \vec S_{rad} \cdot d\vec A_{sup} = \frac{\mu_0 q^2a^2}{6\pi c}$
        

$P =\oint\vec S_{rad}\cdot d\vec A_{sup}$

### Radiação Dipolo Elétrico

---

**Estruturação do sistema**

Considerando duas esferas de metal, com cargas $q(t)$﻿ e $-q(t)$﻿ , separadas por uma distância $d$﻿ (a carga é transportada duma esfera para a outra através dum fio elétrico).

Se a carga for transferida duma esfera para a outra com uma frequência angular, $\omega$﻿, então a **carga de cada esfera** é:

$q(t) = q_0\cos (\omega t)$

Obtemos então um **dipolo elétrico oscilante**, cujo momento dipolar é

$\vec p (t) = p_0\cos(\omega t) \; \hat z$

onde $p_0 \equiv q_0d$﻿ é o valor máximo do momento dipolar (assumimos que as esferas foram colocadas no eixo $z$﻿)

![[Notion/Eletromagnetismo/Untitled 3.png|Untitled 3.png]]

  

---

**Dipolo Elétrico Oscilante**

**Potenciais**

$V(t,r,\theta) = - \frac{p_0\omega}{4\pi\epsilon_0c}\left( \frac{\cos \theta}{r} \right) \text{sen}(\omega t - \omega r /c)$

$\vec A (t,\vec r) = - \frac{\mu_0p_0\omega}{4\pi r}\text{sen}[\omega(t-r/c)] \; (\hat z)$

  

**Intensidade de energia irradiada**

$I = \langle || \vec S || \rangle =\frac{\mu_0p_0^2\omega^4}{32\pi^2 c}\left( \frac{\text{sen}\theta}{r} \right)^2$

**Campos**

$\begin{split}$

$\begin{split}$

**Potência Total irradiada**

$\begin{split}$

- **Potenciais** Dipolo Elétrico oscilante - $V(t,\vec r)$﻿ e $\vec A(\vec r,t)$﻿
    
    $V(t,\vec r) = \frac{1}{4\pi\epsilon_0} \left[ \frac{q_0\cos(\omega t - \omega s_+/c)}{s_+} - \frac{q_0\cos(\omega t - \omega s_-/c)}{s_-} \right]$
    
    - Isto sendo que
        
        $s_{\pm} = \sqrt{r^2 \mp rd\cos \theta + \left( \frac{d}{2} \right)^2}$
        
        e tivemos em conta que
        
        $\vec s_{\pm} = \vec r \; \mp \frac{d}{2} (\hat z)$
        
    
    - Fazendo a aproximação $r \gg c/\omega$﻿
        
        $V(t,r,\theta) = - \frac{p_0\omega}{4\pi\epsilon_0c}\left( \frac{\cos \theta}{r} \right) \text{sen}(\omega t - \omega r /c)$
        
        Obtemos também que o ==**potencial vetor**== é
        
        $\vec A (t,\vec r) = - \frac{\mu_0p_0\omega}{4\pi r}\text{sen}[\omega(t-r/c)] \; (\hat z)$
        
- $\vec E$﻿ do Dipolo Elétrico oscilante
    
    $\vec E = -\nabla V - \frac{\partial \vec A}{\partial t}$
    
    - Usando a expressão obtida para o $V$﻿ acima, obtemos que
        
        $\begin{split}$
        
    - Usando a expressão obtida para o $\vec A$﻿ acima, obtemos que
        
        $\frac{\partial \vec A}{\partial t} = - \frac{\mu_0p_0\omega^2}{4\pi r}\cos[\omega(t-r/c)] (\cos\theta \;\hat r - \text{sen}\theta \; \hat \theta)$
        
    
    Portanto, ficamos com
    
    $\begin{split}$
    
- $\vec B $﻿ do Dipolo Elétrico oscilante
    
    $\begin{split}$
    
- $\vec S $﻿ - Vetor Poynting do Dipolo Elétrico
    
    $\begin{split}$
    
    A intensidade é obtida fazendo a média temporal, ao percorrer um período completo, ou seja
    
    $I = \langle || \vec S || \rangle =\frac{\mu_0p_0^2\omega^4}{32\pi^2 c}\left( \frac{\text{sen}\theta}{r} \right)^2$
    
    Nota : não existe radiação emitida ao longo do eixo do dipolo pois nessa direção $\sin \theta= 0$﻿
    
    ![[Notion/Eletromagnetismo/Untitled 4.png|Untitled 4.png]]
    
- $\langle P \rangle$﻿ - Potência total radiada pelo Dipolo Elétrico
    
    $\begin{split}$
    

### Radiação Dipolo Magnético

---

**Momento Dipolar Magnético** - $m$﻿

$\vec m \equiv I \int d\vec A_{rea} = I \vec a$

$\vec A_{dip}(\vec r) = \frac{\mu_0}{4\pi} \frac{\vec m \times \hat r}{r^2}$

$\vec B_{dip} (\vec r) = \frac{\mu_0}{4\pi} \frac{1}{r^3} \left[ 3(\vec m \cdot \hat r)\hat r - \vec m \right]$

---

**Dipolo magnético oscilante** (variável no tempo)

- Estruturação do sistema
    
    Considera espira circular de raio $R$﻿ na qual flui uma corrente alternada de intensidade
    
    $I(t) = I_0\cos(\omega t)$
    
    Neste caso, o **momento dipolar magnético** é dado por
    
    $\begin{split}$
    
    Isto sendo que o valor máximo de $\vec m$﻿ é
    
    $m_0 = \pi R^2 I_0$
    
- Potencial vetor $\vec A$﻿
    
    Se a densidade linear de carga na espira for nula, então $V = 0$﻿ (padrão de Coulomb).  
    Por outro lado, o potencial vetor é  
    
    $\vec A(t,\vec r ) = \frac{\mu_0}{4\pi} \int \frac{I_0 \cos\left(\omega\left[ t-\frac{|\vec r - \vec r'|}{c}\right]\right)}{|\vec r - \vec r'|}\;d\vec l'$
    
    1. Dipolo na origem com $\vec r = (x,0,z)$﻿
        
        $\vec A(t,\vec r ) = \frac{\mu_0I_0R}{4\pi} \int_0^{2\pi} \frac{\cos\left(\omega\left[ t-\frac{|\vec r - \vec r'|}{c}\right]\right)}{|\vec r - \vec r'|}\;\cos\phi'd\phi' \; (\hat y)$
        
        ![[Notion/Eletromagnetismo/Untitled 5.png|Untitled 5.png]]
        
    2. Aproximação $R \ll r$﻿
    3. Aproximação $R \ll c/\omega$﻿ (ou $R \ll \lambda$﻿)
    4. Aproximação $r \gg c/\omega$﻿
        
        $\vec A(t,r,\theta) \approx - \frac{\mu_0m_0\omega}{4\pi c}\left( \frac{\text{sen}\theta}{r} \right)\text{sen} \left(\omega\left[ t - \frac{r}{c}\right] \right) \hat \phi$
        
- Campos eletromagnéticos $\vec E \; \text{e} \;\vec B$﻿
    
    A partir da expressão do potencial vetor obtida acima $\vec A (t,r,\theta)$﻿ podemos obter as expressões seguintes:
    
    $\begin{split}$
    

O vetor de Poynting segue imediatamente e em relação ao vetor de Poynting para um dipolo elétrico, temos

$\vec S_{DM} = \frac{m_0}{p_0} \frac{1}{c^2} \vec S_{DE}$

Se agora assumirmos que o tamanho espacial do dipolo elétrico é comparável ao diâmetro do dipolo magnético, podemos escrever a razão de suas potências irradiadas como

$\frac{P_{mag}}{P_{el}} \propto \left( \frac{\omega b}{c} \right)^2 \ll 1$

Assim, em casos onde o momento dipolar elétrico é não nulo, a **radiação** será **dominada pela radiação do dipolo elétrico**.

---

### Potência de radiação de carga em aceleração - Fórmula de Larmor

---

The **Larmor formula** is used to calculate the total power radiated by a non-relativistic point charge as it accelerates.

**Fórmula de Larmor**

$P_{Larmor} = \frac{1}{4\pi\epsilon_0}\frac{2q^2|a_{ret}|^2}{3c^3} = \frac{\mu_0 q^2a^2}{6\pi c}$

Esta demonstra que uma **carga em aceleração** emite radiação e, portanto, vai **perder energia**.

A Fórmula de Larmor só é aplicável em contextos de Física Clássica, quando a velocidade da carga é $v\ll c$﻿ .  
Isto verifica-se facilmente quando testamos esta fórmula num átomo de Hidrogénio (eletrão a orbitar um protão). À medida que o eletrão vai orbitando, este irá emitir radiação devido à sua aceleração centrípeta. Desta forma, o eletrão irá “cair” para o protão tão rapidamente que tornaria impossível existirem átomos.  

---

**Fórmula de Larmor generalizada** - **Liénard**

Através do uso dos Potenciais retardados, conseguimos obter uma expressão para a Fórmula de Larmor que também seja aplicável a velocidades relativistas, ou seja

$P (t_{ret})= \frac{\mu_0 q^2 \gamma^6}{6\pi c} \left( a^2 - \left|\frac{\vec v \times \vec a}{c}\right|^2 \right)$

Isto sendo que,

- Fator de Lorentz $\gamma \equiv 1 / \sqrt{1 - \beta^2}$﻿
- $\beta \equiv v/c $﻿

Assim, o fator $\gamma^6$﻿ significa que a potência da radiação tem um aumento enorme, à media que a velocidade da partícula se aproxima da velocidade da luz.

  

### Radiação de Bremsstrahlung - Casos limites da Fórmula generalizada de Larmor

---

In [particle physics](https://www.wikiwand.com/en/Particle_physics), _**bremsstrahlung**_ (from [German](https://www.wikiwand.com/en/German_language) _bremsen_ 'to brake', and _Strahlung_ 'radiation') is [electromagnetic radiation](https://www.wikiwand.com/en/Electromagnetic_radiation) produced by the [deceleration](https://www.wikiwand.com/en/Deceleration) of a [charged particle](https://www.wikiwand.com/en/Charged_particle) when deflected by another charged particle, typically an [electron](https://www.wikiwand.com/en/Electron) by an [atomic nucleus](https://www.wikiwand.com/en/Atomic_nucleus).  
The moving particle loses   
[kinetic energy](https://www.wikiwand.com/en/Kinetic_energy), which is converted into radiation (i.e., [photons](https://www.wikiwand.com/en/Photon)), thus satisfying the [law of conservation of energy](https://www.wikiwand.com/en/Law_of_conservation_of_energy).  
The term is also used to refer to the process of producing the radiation.   
  
_Bremsstrahlung_ has a [continuous spectrum](https://www.wikiwand.com/en/Continuous_spectrum), which becomes more intense, and whose peak intensity shifts toward higher frequencies, as the change of the energy of the decelerated particles increases.

---

O processo de produção de radiação de Bremsstrahlung é causado pela aceleração (ou desaceleração) de uma carga no campo de Coulomb de outra carga (Figura ao lado).

Em suma, estamos perante uma transferência de energia cinética (tipicamente de um eletrão) para energia de radiação, no seguimento de uma aceleração causada por uma carga.

  

![[Untitled 6.png]]

- **Se** **$\vec v \;||\; \vec a $**﻿
    
    $\frac{dP}{d\Omega} = \frac{\mu_0q^2}{16\pi^2c}\frac{a^2\sin^2\theta}{(1-\beta\cos\theta)^5}$
    
    - Para $\beta \approx 1$﻿ (limite relativista), a potência da radiação está concentrada num cone estreito centrado no vetor velocidade $\left( \theta_{máx} \approx \sqrt{(1-\beta)/2}\right)$﻿.  
        A potência total emitida pela partícula é :  
        
    
    $\begin{split}$
    
    Isso diz nos imediatamente que o pico da emissão,  
    no caso ultrarrelativístico,  
    ocorre em  
    $θ ≈ 1/2γ$﻿ com uma largura típica de $δθ ≈ 1/γ$﻿.
    
    ![[Untitled 7.png]]
    
    Assim, a emissão é muito concentrada ao longo da linha de movimento da partícula.
    

- **Se** $\vec v \perp \vec a$﻿ **- Radiação** ==**Sincrotrão**==
    
    $\frac{dP}{d\Omega} = \frac{\mu_0q^2a^2}{16\pi^2 c} \frac{[(1-\beta \cos\theta)^2 - (1-\beta^2)\text{sen}^2\theta\text{cos}^2\phi]}{(1-\beta\cos\phi)^5}$
    
    - Para $\beta \approx 1 $﻿ (limite relativista) a radiação está mais uma vez concentrada numa região estreita à volta da direção e sentido de $\vec v$﻿ .  
        A potência total emitida por partícula é igual a  
        
    
    $\begin{split}$
    
    Isso então é a generalização da emissão de ciclotrão para o caso ultrarrelativístico e vemos que a emissão é fortemente focada ao longo da direção do movimento, quase como os faróis de um comboio que circula em círculos.
    
    Isso é ilustrado na Figura.
    
    ![[Untitled 8.png]]
    
    ![[Untitled 9.png]]
    
    Figura: Uma ilustração da dependência angular do padrão de emissão para o caso da velocidade perpendicular à aceleração.  
    A esquerda, um caso onde  
    $β = 0.2$﻿, enquanto à direita mostra o caso de $β = 0.8$﻿.  
    Observe a escala dramaticamente diferente no eixo.  
    Quando  
    $β = 0$﻿, o padrão de emissão atrás e à frente da partícula é simétrico, isso é gradualmente perdido à medida que $β$﻿ aumenta em direção a $\beta = 1$﻿.
    

### Força de reação da radiação - Fórmula de Abraham-Lorentz

Quando uma carga se move com aceleração, esta emite radiação.  
Desta forma, a carga irá sofrer um desvio na sua trajetória devido à Força de reação da radiação,  
$\vec F_{rad}$﻿, que é aplicada na mesma.

Esta força é representada pela equação seguinte, a fórmula de Abraham-Lorentz :

$\vec F_{rad} = \frac{\mu_0q^2}{6\pi c }\dot{\vec a}$

Esta equação tem alguns problemas sérios.  
Se inserirmos essa força na segunda lei de Newton, encontramos genericamente uma aceleração exponencialmente crescente, exigindo condições iniciais bem ajustadas para evitá-la.  
Também é possível mostrar que a aceleração começa antes que a força seja aplicada, quebrando assim a causalidade.  
Por essas razões, esta é uma fórmula um tanto controversa.  

# 3. Eletrodinâmica (e Magnetodinâmica) Relativista

---

Ao contrário da mecânica Newtoniana, a eletrodinâmica clássica _já_ é consistente com a relatividade especial.  
As equações de Maxwell e a lei da Força de Lorentz podem ser aplicadas em qualquer sistema inercial.  

Contudo, o que um observador interpreta como um processo elétrico, outro pode interpretar como magnético, mesmo que o movimento, previsto, da partícula seja idêntico.

Ver a página de **[![](icons8-axis-80(purple).png)Relatividade](https://www.notion.so/Relatividade-32ca32c7cbce4e2bbd60345148602415?pvs=21)** **para uma melhor compreensão da mecânica relativista.**

---

### Transformações de Lorentz - Campos @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$E'$﻿ e @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$B'$﻿

$\overline {\vec E} = \vec v \times \overline {\vec B}$

$\overline {\vec B} = -\frac{1}{c^2}\left(\vec v \times \overline {\vec E}\right)$

As equações de Maxwell são invariantes perante as transformações de Lorentz se os campos $\vec E$﻿ e $\vec B$﻿ também se transformarem.

$\begin{split}$

$\begin{split}$

Ou seja, no caso em que o obs. $\bar{\mathcal O}$﻿ se desloca com velocidade $\vec v = v(\hat x)$﻿ em relação ao obs. $\mathcal O$﻿

$\begin{cases}$

$\begin{cases}$

### Fio com corrente - Mudança de referencial

- **Sistema no referencial** **$\mathcal O$**﻿
    
    Vou considerar dois fios condutores ==superimpostos== um no outro.
    
    Assumindo que as cargas estão juntas o suficiente, podemos tratá-las como uma carga linear contínua, $\lambda$﻿
    
    - Um fio possui carga positiva por unidade de comprimento , $\lambda_+ = \lambda$﻿, e está a mover-se com velocidade $\vec v_+ = v(\hat x)$﻿
    - O outro fio possui carga negativa por unidade de comprimento, $\lambda_- = -\lambda$﻿, e está amover-se com velocidade $\vec v_- = v(-\hat x)$﻿
    
    ![[Untitled 10.png]]
    
    Assim, a corrente resultante fica :
    
    $\begin{split}$
    
    Enquanto isto, há também uma carga, $q$﻿, a distância $s$﻿, a viajar com velocidade $\vec u = u (\hat x)$﻿, sendo que $u < v$﻿
    
    Uma vez que ambas as cargas lineares se anulam, não há força elétrica a ser aplicada em $q$﻿
    
    $F_e = qE = 0$
    

- **Sistema no referencial** **$\bar{\mathcal O}$**﻿
    
    Vou considerar agora o mesmo sistema visto a partir do ponto de vista do observador $\bar{\mathcal O}$﻿
    
    Este observador move-se com velocidade $\vec u = u(\hat x)$﻿, o que significa que neste referencial a carga $q$﻿ está em repouso.
    
    Assim, pela ==[lei de adição de velocidades de Einstein](https://www.notion.so/Eletromagnetismo-e982f548962f488290d29f95935a744b?pvs=21)==, a velocidade das linhas de carga ficam:
    
    $\bar v_\pm = \frac{v \mp u}{1 \pm vu/c^2}$
    
    Pelo que $\bar v_- > \bar v_+$﻿
    
    Daqui retiramos que a contração de Lorentz, do espaço entre as cargas, é maior para as cargas negativas
    
    ![[Untitled 11.png]]
    
    Neste referencial,
    
    $\bar\lambda_\pm = \pm (\bar \gamma_\pm)\bar\lambda_0$
    
    $\bar \gamma_\pm = \frac{1}{\sqrt{1-\bar{v}_\pm^2/c^2}}$
    
    - tendo em conta que :
        
        $\gamma $﻿ e $v$﻿ se referem ao referencial $\mathcal O$﻿, e que
        
        $\gamma = \frac{1}{\sqrt{1-v^2/c^2}}$
        
        então temos que
        
        $\begin{split}$
        
    
    Obtemos que
    
    $\begin{split}$
    
    **Conclusão :** A contração, desigual, de Lorentz fez com que o fio de corrente que é eletricamente neutro em $\mathcal O$﻿ passa-se a ser carregado em $\bar {\mathcal O}$﻿
    
    Assim,
    
    $\bar E = \frac{\bar \lambda}{2\pi\epsilon_0\bar s} = \frac{\bar \lambda}{2\pi\epsilon_0 s} $
    
    Pelo que,
    
    $\begin{split}$
    

Após a análise destes dois referenciais consigo ver que:

- No referencial $\mathcal O$﻿
    
    $F_e = qE = 0$
    
- No referencial $\bar{\mathcal O}$﻿
    
    $\begin{split}$
    

Desta forma, através do referencial $\bar{\mathcal O}$﻿, percebo que existe uma força a atuar na carga $q$﻿.

Se há uma força a atuar em $q $﻿ no referencial $\bar{\mathcal O}$﻿, então também **terá que existir uma força** a atuar em $q$﻿ **no referencial** **${\mathcal O}$**﻿

Como $q $﻿ está em repouso em $\bar {\mathcal O}$﻿, e $\overline{\mathbf F} \perp \vec u$﻿, podemos usar ==[isto](https://www.notion.so/Eletromagnetismo-e982f548962f488290d29f95935a744b?pvs=21)== para obter $\mathbf F$﻿

$\begin{split}$

Assim, concluo que

- No referencial $\bar {\mathcal O}$﻿ a carga é atraída para o fio por uma **força elétrica**
- No referencial $\mathcal O$﻿ a carga é atraída para o fio por uma **força magnética**
    
    $\begin{split}$
    

### Placas com corrente - Mudança de referencial

Condensador de placas infinitas paralelas ao plano $xy$﻿

- **Sistema no referencial** $\mathcal O$﻿
    
    - Placas em repouso
    - Placas com cargas superficiais $\pm \sigma$﻿
    - Campo elétrico, $E$﻿, uniforme na zona entre as placas
        
        $\vec E=\frac{\sigma}{\epsilon_0} (\hat y)$
        
    
      
    
- **Sistema no referencial** $\bar{\mathcal O}$﻿
    
    - O observador $\bar{\mathcal O}$﻿ move-se com velocidade $\vec{\overline v} = \bar v(\hat x)$﻿ em relação a $\mathcal O$﻿
    - Placas movem-se com velocidade $\vec{\overline v} = \bar v(-\hat x)$﻿
        
        ![[Untitled 12.png]]
        
    - Placas com cargas superficiais $\pm \bar \sigma$﻿
    - Campo elétrico, $\overline E$﻿, uniforme na zona entre as placas
        
        $\overrightarrow {\overline E}=\frac{\bar \sigma}{\epsilon_0} (\hat y)$
        
    
    O comprimento das placas, $l$﻿, sofre Contração de Lorentz por um fator de :
    
    $\bar \gamma = \frac{1}{\sqrt{1-\bar v^2/c^2}}$
    
    Portanto, a carga por unidade de área é aumentada por um fator de $\gamma$﻿ :
    
    $\bar \sigma = \bar \gamma \sigma$
    
    Desta forma, vejo também que o campo perpendicular ao movimento é
    
    $\overrightarrow {\overline E}_\perp = \gamma \overrightarrow E_\perp$
    
    Devido à corrente superficial, $K$﻿,
    
    $\overrightarrow{\overline K}_\pm = \mp \bar \sigma \bar v (\hat x)$
    
    Há um campo magnético, $\bar B$﻿.
    
    Pela regra da mão direita percebo que, $\overrightarrow{\overline B} = \bar B (-\hat z)$﻿
    
    Pela Lei de Ampere a sua magnitude é $\bar B = \mu_0 \bar K = \mu_0\bar \sigma\bar v$﻿
    
    $\overrightarrow{\overline B} = -\mu_0\bar\sigma\bar v (\hat z)$
    

Assim, concluo que :

- No referencial $\mathcal O$﻿
    
    $\vec E=\frac{\sigma}{\epsilon_0} (\hat y) \qquad \vec B = \vec 0$
    
- No referencial $\bar{\mathcal O}$﻿
    
    $\overrightarrow {\overline E}=\frac{\bar \sigma}{\epsilon_0} (\hat y) = \frac{\gamma \sigma}{\epsilon_0} (\hat y) = \gamma \vec E$
    
    $\overrightarrow{\overline B} = -\mu_0\bar\sigma\bar v (\hat z) = -\mu_0\gamma \sigma \bar v (\hat z)$
    

### Partícula em movimento - Mudança de referencial - incompleto

==**Electric field**== of a point charge in uniform motion - see Example 12.14, Griffiths

  

==**Magnetic field**== of a point charge in uniform motion - see Example 12.15, Griffiths

  

### 4-densidade Corrente Elétrica - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\vec J$﻿

$\vec J = \rho_p \vec U$

em que $\rho_p$﻿ é a densidade volúmica de carga no referencial próprio dum fluido carregado.

Isto, sendo que $\rho = \rho_p\gamma$﻿

- As componentes de $\vec J$﻿ são:
    
    $\begin{split}$
    

### Padrão de Lorentz com 4-vetores

- Equações de Maxwell -

Por definição temos os 4-vetores seguintes :

$\bold A = A^\mu = (V,\vec A)\\$

Assim, utilizando unidades naturais, temos que

$\square \bold A = -\bold J$

- **Condição de Lorentz**
    
    O padrão de Lorentz, com $c=1$﻿, simplifica agora para :
    
    $\begin{split}$
    
    uma vez que o 4-vetor $\bold A = (V,\vec A)$﻿
    

- **Invariância do Padrão de Lorentz**
    
    Sabemos que $A^\mu = (V,\vec A)$﻿ e que $\partial_\mu A^\mu = 0$﻿ é a definição do padrão de Lorentz.
    
    Ao mudar de referencial iremos obter que,
    
    $\begin{split}$
    
    Assim, concluímos que a definição do **padrão de Lorentz é invariante** numa mudança de referencial inercial.
    

### Tensor Faraday - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$F^{\mu\nu}$﻿

Na relatividade restrita (RR), os campos elétrico e magnético transformam-se através das transformadas de Lorentz. Estas transformações dos campos podem ser escritas na forma dum tensor, o tensor de Faraday.

O **Tensor de Faraday** **$\mathbf F$**﻿, também chamado **tensor eletromagnético,** é um objeto matemático que ==**descreve o campo eletromagnético no espaço tempo**==.

$\begin{split}$

Isto, sendo que $\mathbf A$﻿ representa o ==[4-potencial vetor](https://www.notion.so/Eletromagnetismo-e982f548962f488290d29f95935a744b?pvs=21)==

Considerando ==**unidades naturais**== obtemos

$\begin{split}$

As **componentes** de $F^{\alpha\beta}$﻿ são dadas por

$F_{i0} = \delta_{ij} E^j \qquad F_{ij} = \epsilon_{ijk}B^k$

As restantes componentes são nulas, ou seja $F^{00} = F^{11} = F^{22} = F^{33} = 0$﻿

**Propriedades Tensor de Faraday** **:**

- É anti-simetrico, ver
- É invariante perante a transformação de padrão
    
    $A^\alpha \rightarrow A^\alpha + \partial ^\alpha \chi$
    
    $\begin{split}$
    
- O seu determinante é invariante perante uma transformação de Lorentz
    
    $\det(F^{\mu\nu}) = (\vec E\cdot\vec B)^2$
    
- A sua magnitude é
    
    $||F^{\mu\nu}||^2 = F^{\mu\nu}F_{\mu\nu} = -2(E^2-B^2)$
    

### Equações de Maxwell - Tensores

$F^{\mu\nu}_{,\nu} = J^{\mu} \quad \quad F^{\mu\nu,\alpha} + F^{\nu\alpha,\mu} + F^{\alpha\mu,\nu} = 0$

Isto tendo em conta que

$F^{\mu\nu,\alpha} = \partial^\alpha F^{\mu\nu} = \frac{\partial F^{\mu\nu}}{\partial x_\alpha}$

- No padrão de Lorentz $F^{\mu\nu}_{,\nu} = J^{\mu}$﻿ , passa a ser :
    
    $\square A^\mu = -J^\mu \\$
    

### Tensor Energia-Momento - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$T^{\mu\nu}$﻿

O **tensor energia-momento do campo eletromagnético** $T^{\mu\nu}$﻿, também chamado tensor impulsão-energia, tem componentes

$T^{\mu\nu} = F^{\mu\alpha}F^{\nu\beta}\eta_{\alpha\beta} - \frac{1}{4}\eta^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}$

- Este tensor é simétrico, $T^{\alpha\beta} = T^{\beta\alpha} $﻿

- As suas **componentes representam** :
    
    - A **densidade de energia** do campo eletromagnético
        
        $T^{00} = U = \frac{1}{2}(\epsilon_0E^2+\frac{1}{\mu_0}B^2) $
        
    - A **fluxo de energia** do campo eletromagnético
        
        $T^{0i} = T^{i0} = S_i $
        
    - A **tensão** (força por unidade de área) aplicada numa superfície
        
        $\begin{split}$
        
    
    isto sendo que
    
    - $S_i = \vec S$﻿, é o ==[vetor Poynting](https://www.notion.so/Eletromagnetismo-e982f548962f488290d29f95935a744b?pvs=21)==
    - $T_{ij}$﻿ são as componentes do ==[tensor de Maxwell](https://www.notion.so/Eletromagnetismo-e982f548962f488290d29f95935a744b?pvs=21)==

A conservação da energia e do momento é traduzida pela seguinte equação :

$T^{\mu\nu}_{,\nu} = \partial_\nu T^{\mu\nu} = 0$

---

A imagem abaixo representa o significado das componentes do tensor energia-momento  
Neste caso interessa-nos a contribuição eletromagnética para este tensor  

[![](https://upload.wikimedia.org/wikipedia/commons/f/fe/StressEnergyTensor_contravariant.svg)](https://upload.wikimedia.org/wikipedia/commons/f/fe/StressEnergyTensor_contravariant.svg)

### 4-Força de Lorentz - @import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css')$\mathcal F_L$﻿

Fórmula geral

$\vec F = q(\vec E + \vec v \times \vec B)$

==**Considerando :**==

- Referencial inercial momentaneamente comóvel com a partícula - o referencial acompanha o movimento da partícula
    
    $\mathbf U = (1,0,0,0) \quad\quad \mathbf{\mathcal A} = (0,\vec a)\quad\quad dt = d\tau$
    
- $F^{0i} = E_i$﻿

Obtemos, da fórmula geral, que a Força de Lorentz fica $m_0\vec a = q\vec E$﻿, que também pode ser escrita como

$\mathcal F_{Lorentz}^\mu = m_0\frac{dU^\mu}{d\tau} = qF^{\mu\beta}U_\beta$

### 4-Potência de radiação de carga em aceleração - Fórmula de Larmor

Ver ==[aqui](https://www.notion.so/Eletromagnetismo-e982f548962f488290d29f95935a744b?pvs=21)== a forma, não relativista, da fórmula de Larmor

Num ==**referencial momentaneamente comóvel**== temos que

$\mathbf U = (1,0,0,0) \quad\quad \mathbf{\mathcal A} = (0,a_x, a_y, a_z)\quad\quad dt = d\tau$

$\mathbf P_{rad} = (E_{rad},0,0,0)$

E que

$\begin{split}$

Usando unidades naturais temos a seguinte maneira de escrever a fórmula de Larmor

$\frac{dP_{rad}^\mu}{d\tau} = \frac{\mu_0q^2}{6\pi} (\mathcal A^\nu\mathcal A_\nu) U^\mu $

- ==Dedução de== $\mathbf{\mathcal A} \cdot \mathbf{\mathcal A}$﻿
    
    $\vdots$
    
    $\mathbf{\mathcal A} \cdot \mathbf{\mathcal A} = \gamma ^6 \left(a^2 - | \vec v \times \vec a |^2\right)$
    

Assim, a ==**forma generalizada**== da fórmula de Larmor fica

$\begin{split}$

$\begin{split}$

  

### 4-Força Reação à Radiação - Fórmula de Abraham-Lorentz

A generalização relativista da fórmula de Abraham-Lorentz pode ser escrita como

$\mathbf{\mathcal F} = \frac{\mu_0q^2}{6\pi} \left( \frac{d\mathbf{\mathcal A}}{d\tau} + \left[ \frac{d\mathbf{\mathcal A}}{d\tau} \cdot \mathbf U\right] \mathbf U \right)$

sendo que $\mathbf {\mathcal F}$﻿ é a 4-força de reação que atua sobre a partícula