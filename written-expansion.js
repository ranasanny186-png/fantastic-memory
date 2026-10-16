// Distinct textbook calculation groups and graph tasks; append only.
questions.push(...[
  {
    "type": "calc",
    "topic": 0,
    "title": "高收入者需求90−P、低收入者需求84−2P。在P=6时求两者需求与总需求；转移支付后需求分别变为86−P与90−2P，再求总需求。",
    "fields": [
      {
        "label": "原高收入者需求",
        "value": 84.0,
        "tolerance": 0.02
      },
      {
        "label": "原低收入者需求",
        "value": 72.0,
        "tolerance": 0.02
      },
      {
        "label": "原总需求",
        "value": 156.0,
        "tolerance": 0.02
      },
      {
        "label": "转移后总需求",
        "value": 158.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "同一价格下水平加总。原需求分别84、72，总156；转移后为80、78，总158。线性式须在个体需求均非负的区间使用。",
    "source": "高鸿业第8版·配套题库·章节二·计算1 · PDF 53页（分问核算整理）",
    "bankId": "二-calc-1"
  },
  {
    "type": "calc",
    "topic": 60,
    "title": "苹果价格由32升至40美分，销量下降12%，新销量880万公斤。求原销量与中点需求弧弹性绝对值。",
    "fields": [
      {
        "label": "原销量",
        "value": 1000.0,
        "tolerance": 0.02
      },
      {
        "label": "弧弹性",
        "value": 0.574468,
        "tolerance": 0.02
      }
    ],
    "explanation": "原销量880/0.88=1000；弧弹性=|(−120/940)/(8/36)|≈0.5745。",
    "source": "高鸿业第8版·配套题库·章节二·计算2 · PDF 54页（分问核算整理）",
    "bankId": "二-calc-2"
  },
  {
    "type": "calc",
    "topic": 8,
    "title": "需求Q=100−2P。求需求单位弹性时的价格与数量，以及Q=20时的边际收益。",
    "fields": [
      {
        "label": "单位弹性价格",
        "value": 25.0,
        "tolerance": 0.02
      },
      {
        "label": "单位弹性数量",
        "value": 50.0,
        "tolerance": 0.02
      },
      {
        "label": "Q=20时MR",
        "value": 30.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "反需求P=50−Q/2，TR=50Q−Q²/2，MR=50−Q。单位弹性条件2P/(100−2P)=1。",
    "source": "高鸿业第8版·配套题库·章节二·计算3 · PDF 55页（分问核算整理）",
    "bankId": "二-calc-3"
  },
  {
    "type": "calc",
    "topic": 4,
    "title": "正价格下需求弹性恒为2，且P=1时Q=10。需求函数为Q=A·P^b，求A、b及P=2时需求量。",
    "fields": [
      {
        "label": "A",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "b",
        "value": -2.0,
        "tolerance": 0.02
      },
      {
        "label": "P=2时Q",
        "value": 2.5,
        "tolerance": 0.02
      }
    ],
    "explanation": "−(dQ/dP)P/Q=2，积分得Q=A/P²；已知点确定A=10。",
    "source": "高鸿业第8版·配套题库·章节二·计算4 · PDF 55页（分问核算整理）",
    "bankId": "二-calc-4"
  },
  {
    "type": "calc",
    "topic": 8,
    "title": "采用基期百分比的一阶近似：需求弹性0.5，原P=3.2、Q=1000；价格下降10%。求近似新销量、新收益与收益变化。",
    "fields": [
      {
        "label": "近似新销量",
        "value": 1050.0,
        "tolerance": 0.02
      },
      {
        "label": "近似新收益",
        "value": 3024.0,
        "tolerance": 0.02
      },
      {
        "label": "收益变化",
        "value": -176.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "数量近似增加5%，新P=2.88，新Q=1050，收益3024，原收益3200，变化−176。有限变动需明确这是弹性线性近似。",
    "source": "高鸿业第8版·配套题库·章节二·计算8 · PDF 56页（分问核算整理）",
    "bankId": "二-calc-8"
  },
  {
    "type": "calc",
    "topic": 7,
    "title": "Qd=50−2Pb，Qs=−25+3Ps。求无税价格，以及征单位税5后的买方价、卖方价和各自税负。",
    "fields": [
      {
        "label": "无税价格",
        "value": 15.0,
        "tolerance": 0.02
      },
      {
        "label": "税后买方价",
        "value": 18.0,
        "tolerance": 0.02
      },
      {
        "label": "税后卖方价",
        "value": 13.0,
        "tolerance": 0.02
      },
      {
        "label": "买方税负",
        "value": 3.0,
        "tolerance": 0.02
      },
      {
        "label": "卖方税负",
        "value": 2.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "无税50−2P=−25+3P得15；税后Pb−Ps=5，联立得Pb=18、Ps=13、Q=14。",
    "source": "高鸿业第8版·配套题库·章节二·计算10 · PDF 57页（分问核算整理）",
    "bankId": "二-calc-10"
  },
  {
    "type": "calc",
    "topic": 5,
    "title": "电力自身需求价格弹性绝对值1.2，电力需求对天然气价格的交叉弹性0.2。电价上升1%，天然气价格约需变化百分之几才能抵消电力需求变化？",
    "fields": [
      {
        "label": "天然气价格变化百分数",
        "value": 6.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "按一阶弹性近似，−1.2×1%+0.2×g=0，g=6%，即天然气价上升。",
    "source": "高鸿业第8版·配套题库·章节二·计算11 · PDF 57页（分问核算整理）",
    "bankId": "二-calc-11"
  },
  {
    "type": "calc",
    "topic": 5,
    "title": "钢需求自身价格弹性2.5、铝价交叉弹性2、收入弹性1.5。钢价涨8%、收入涨6%、铝价跌2%，原销量24000。按百分比线性近似求新销量；若保持原销量，钢价可涨百分之几？",
    "fields": [
      {
        "label": "近似新销量",
        "value": 20400.0,
        "tolerance": 0.02
      },
      {
        "label": "维持销量的涨价百分数",
        "value": 2.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "需求变动≈−2.5×8%+1.5×6%+2×(−2%)=−15%，故20400。保持需求：−2.5g+9%−4%=0，g=2%。",
    "source": "高鸿业第8版·配套题库·章节二·计算12 · PDF 57页（分问核算整理）",
    "bankId": "二-calc-12"
  },
  {
    "type": "calc",
    "topic": 7,
    "title": "粮食Qd=6−0.5Pb，Qs=3+Ps。政府每单位补贴生产者0.5，Ps=Pb+0.5。求补贴后买方价格、卖方价格、数量及按模型单位计算的财政支出。",
    "fields": [
      {
        "label": "买方价",
        "value": 1.666667,
        "tolerance": 0.02
      },
      {
        "label": "卖方价",
        "value": 2.166667,
        "tolerance": 0.02
      },
      {
        "label": "交易量",
        "value": 5.166667,
        "tolerance": 0.02
      },
      {
        "label": "财政支出",
        "value": 2.583333,
        "tolerance": 0.02
      }
    ],
    "explanation": "联立6−0.5Pb=3+Pb+0.5，Pb=5/3，Ps=13/6，Q=31/6；支出0.5Q=31/12。财政支出的单位随数量和价格的模型单位组合。",
    "source": "高鸿业第8版·配套题库·章节二·计算15 · PDF 59页（分问核算整理）",
    "bankId": "二-calc-15"
  },
  {
    "type": "calc",
    "topic": 11,
    "title": "U=x^0.2 y^0.8，Px=1、Py=4，要实现U=100，求支出最小的x、y和最小支出。",
    "fields": [
      {
        "label": "x",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "y",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "支出",
        "value": 500.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MRS=(0.2/0.8)y/x=1/4，故y=x。效用为x，达到100时x=y=100，支出500。",
    "source": "高鸿业第8版·配套题库·章节三·计算1 · PDF 87页（分问核算整理）",
    "bankId": "三-calc-1"
  },
  {
    "type": "calc",
    "topic": 62,
    "title": "U=x²y，税前收入20000，所得税10%；原Px=100、Py=60，x另有20%销售税。求税后最优x、y。",
    "fields": [
      {
        "label": "x",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "y",
        "value": 100.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "可支配收入18000，x含税价120。按2/3、1/3分配支出，x=12000/120=100，y=6000/60=100。",
    "source": "高鸿业第8版·配套题库·章节三·计算3 · PDF 88页（分问核算整理）",
    "bankId": "三-calc-3"
  },
  {
    "type": "calc",
    "topic": 62,
    "title": "按原题的对数效用形式，取U=ln x+2ln y，Px=1、Py=2、m=120。求x、y、MRS及x的收入弹性。",
    "fields": [
      {
        "label": "x",
        "value": 40.0,
        "tolerance": 0.02
      },
      {
        "label": "y",
        "value": 40.0,
        "tolerance": 0.02
      },
      {
        "label": "MRSxy",
        "value": 0.5,
        "tolerance": 0.02
      },
      {
        "label": "x收入弹性",
        "value": 1.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "指数权重1与2，x=m/(3Px)=40，y=2m/(3Py)=40。MRS=y/(2x)=0.5，线性收入需求弹性1。这里明确了原一般式参数。",
    "source": "高鸿业第8版·配套题库·章节三·计算9 · PDF 91页（分问核算整理）",
    "bankId": "三-calc-9"
  },
  {
    "type": "calc",
    "topic": 11,
    "title": "U=50x−0.5x²+100y−y²+100，收入672，Px=4、Py=14。求内点最优x、y与x的收入点弹性。",
    "fields": [
      {
        "label": "x",
        "value": 42.0,
        "tolerance": 0.02
      },
      {
        "label": "y",
        "value": 36.0,
        "tolerance": 0.02
      },
      {
        "label": "x收入弹性",
        "value": 0.561404,
        "tolerance": 0.02
      }
    ],
    "explanation": "一阶条件(50−x)/4=(100−2y)/14，结合预算得x=42、y=36。一般收入I下x=(I+525)/28.5，收入弹性I/(I+525)=672/1197。",
    "source": "高鸿业第8版·配套题库·章节三·计算10 · PDF 91页（分问核算整理）",
    "bankId": "三-calc-10"
  },
  {
    "type": "calc",
    "topic": 61,
    "title": "U=xy，原Px=Py=2、m=40。Py降到1后，求初始效用、实际新x和y，以及维持初始效用的希克斯补偿x和y。",
    "fields": [
      {
        "label": "初始效用",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "实际新x",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "实际新y",
        "value": 20.0,
        "tolerance": 0.02
      },
      {
        "label": "补偿x",
        "value": 7.071068,
        "tolerance": 0.02
      },
      {
        "label": "补偿y",
        "value": 14.142136,
        "tolerance": 0.02
      }
    ],
    "explanation": "初始x=y=10，U=100。新最优按支出各半得(10,20)。补偿条件y/x=2、xy=100，得x=√50、y=√200。",
    "source": "高鸿业第8版·配套题库·章节三·计算12 · PDF 92页（分问核算整理）",
    "bankId": "三-calc-12"
  },
  {
    "type": "calc",
    "topic": 61,
    "title": "U=xy，m=120、Px=2、Py=3。求原最优x、y与货币边际效用。Px上涨44%后，维持原效用所需收入增加多少、百分之几？",
    "fields": [
      {
        "label": "原x",
        "value": 30.0,
        "tolerance": 0.02
      },
      {
        "label": "原y",
        "value": 20.0,
        "tolerance": 0.02
      },
      {
        "label": "货币边际效用",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "补偿收入增加",
        "value": 24.0,
        "tolerance": 0.02
      },
      {
        "label": "补偿增加百分数",
        "value": 20.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "原支出各半得(30,20)，U=600，λ=MUx/Px=20/2=10。支出函数在Px上涨1.44倍时增加√1.44=1.2倍，因此需144，增加24即20%。",
    "source": "高鸿业第8版·配套题库·章节三·计算13 · PDF 93页（分问核算整理）",
    "bankId": "三-calc-13"
  },
  {
    "type": "calc",
    "topic": 18,
    "title": "按题设收益效用U(R)=0.5+R²，R单位千元。股票收益以0.4概率为8、0.6概率为−5；银行确定收益0.2。分别求股票期望效用、银行效用及股票期望收益。",
    "fields": [
      {
        "label": "股票期望效用",
        "value": 41.1,
        "tolerance": 0.02
      },
      {
        "label": "银行效用",
        "value": 0.54,
        "tolerance": 0.02
      },
      {
        "label": "股票期望收益（千元）",
        "value": 0.2,
        "tolerance": 0.02
      }
    ],
    "explanation": "EU=0.4×64.5+0.6×25.5=41.1；银行U(0.2)=0.54；股票E(R)=3.2−3=0.2。须按题设的收益效用比较，不把效用值与货币收益混淆。",
    "source": "高鸿业第8版·配套题库·章节三·计算16 · PDF 95页（分问核算整理）",
    "bankId": "三-calc-16"
  },
  {
    "type": "calc",
    "topic": 65,
    "title": "Q=min(2L,3K)，目标Q=120。求无闲置L、K；再求(w,r)=(1,3)与(4,2)时的最小成本。",
    "fields": [
      {
        "label": "L",
        "value": 60.0,
        "tolerance": 0.02
      },
      {
        "label": "K",
        "value": 40.0,
        "tolerance": 0.02
      },
      {
        "label": "第一组最小成本",
        "value": 180.0,
        "tolerance": 0.02
      },
      {
        "label": "第二组最小成本",
        "value": 320.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "有效技术组合2L=3K=120，L=60、K=40，不因正要素价格改变；成本分别60+120=180及240+80=320。",
    "source": "高鸿业第8版·配套题库·章节五·计算1 · PDF 143页（分问核算整理）",
    "bankId": "五-calc-1"
  },
  {
    "type": "calc",
    "topic": 26,
    "title": "AC=200/Q+6−2Q+2Q²。把MC写成a+bQ+cQ²，求a、b、c。",
    "fields": [
      {
        "label": "a",
        "value": 6.0,
        "tolerance": 0.02
      },
      {
        "label": "b",
        "value": -4.0,
        "tolerance": 0.02
      },
      {
        "label": "c",
        "value": 6.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "先乘Q得TC=200+6Q−2Q²+2Q³，再求导MC=6−4Q+6Q²，不能直接对AC求导当MC。",
    "source": "高鸿业第8版·配套题库·章节五·计算3 · PDF 145页（分问核算整理）",
    "bankId": "五-calc-3"
  },
  {
    "type": "calc",
    "topic": 64,
    "title": "Q(L)=−0.1L³+2L²+20L，工资固定、劳动唯一可变。求AP最大时L，以及AVC最小时对应产量。",
    "fields": [
      {
        "label": "L",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "AVC最小时Q",
        "value": 300.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "AP=−0.1L²+2L+20，一阶条件−0.2L+2=0得10。AVC=w/AP，因此同处最小，产量Q(10)=300。",
    "source": "高鸿业第8版·配套题库·章节五·计算5 · PDF 145页（分问核算整理）",
    "bankId": "五-calc-5"
  },
  {
    "type": "calc",
    "topic": 64,
    "title": "STC=5Q³−18Q²+100Q+160，工资固定且劳动唯一可变。求MC由下降转上升、即开始体现相关边际产量下降的产量阈值。",
    "fields": [
      {
        "label": "阈值Q",
        "value": 1.2,
        "tolerance": 0.02
      }
    ],
    "explanation": "MC=15Q²−36Q+100，MC′=30Q−36；Q>1.2时MC增加、在相关可行区间MP下降。",
    "source": "高鸿业第8版·配套题库·章节五·计算6 · PDF 146页（分问核算整理）",
    "bankId": "五-calc-6"
  },
  {
    "type": "calc",
    "topic": 29,
    "title": "MC=1+Q/2，MR=10−Q，FC=2、TR(0)=0。求Q从2增至4时成本增量、收益增量，以及最优产量和最大利润。",
    "fields": [
      {
        "label": "成本增加",
        "value": 5.0,
        "tolerance": 0.02
      },
      {
        "label": "收益增加",
        "value": 14.0,
        "tolerance": 0.02
      },
      {
        "label": "最优产量",
        "value": 6.0,
        "tolerance": 0.02
      },
      {
        "label": "最大利润",
        "value": 25.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "积分MC得增量5，积分MR得14。MC=MR解Q=6；TC=2+Q+Q²/4，TR=10Q−Q²/2，利润42−17=25。",
    "source": "高鸿业第8版·配套题库·章节五·计算8 · PDF 146页（分问核算整理）",
    "bankId": "五-calc-8"
  },
  {
    "type": "calc",
    "topic": 64,
    "title": "TC=4Q³−30Q²+90Q+60，劳动唯一可变且工资固定。MC从何产量开始递增？",
    "fields": [
      {
        "label": "阈值Q",
        "value": 2.5,
        "tolerance": 0.02
      }
    ],
    "explanation": "MC=12Q²−60Q+90，导数24Q−60在Q>2.5时为正。相关正MP区间内，MC递增对应MP下降。",
    "source": "高鸿业第8版·配套题库·章节五·计算9 · PDF 147页（分问核算整理）",
    "bankId": "五-calc-9"
  },
  {
    "type": "calc",
    "topic": 24,
    "title": "Q=L^(3/8)K^(5/8)，w=4、r=5。求生产200单位的成本最小L、K（允许小数）。",
    "fields": [
      {
        "label": "L",
        "value": 167.08724,
        "tolerance": 0.02
      },
      {
        "label": "K",
        "value": 222.782987,
        "tolerance": 0.02
      }
    ],
    "explanation": "MRTS=(3/5)K/L=4/5，K/L=4/3。代入Q=L(4/3)^(5/8)=200即可，两个投入都可连续调整。",
    "source": "高鸿业第8版·配套题库·章节五·计算11 · PDF 148页（分问核算整理）",
    "bankId": "五-calc-11"
  },
  {
    "type": "calc",
    "topic": 24,
    "title": "公司已拥有两厂，均须承担其固定成本。TCA=80+2qA+0.5qA²，TCB=50+qB²；总产量16。求两厂最小总成本的产量分配与总成本。",
    "fields": [
      {
        "label": "qA",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "qB",
        "value": 6.0,
        "tolerance": 0.02
      },
      {
        "label": "总成本",
        "value": 236.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MCA=2+qA，MCB=2qB。联立2+qA=2qB与qA+qB=16得(10,6)；TCA=150，TCB=86，总236。",
    "source": "高鸿业第8版·配套题库·章节五·计算13 · PDF 149页（分问核算整理）",
    "bankId": "五-calc-13"
  },
  {
    "type": "calc",
    "topic": 32,
    "title": "100个相同竞争厂商，各TC=0.1q²+q+10，市场需求Q=4000−400Pb。求无税P、Q；单位税0.9后求买方价、卖方价与Q。",
    "fields": [
      {
        "label": "无税P",
        "value": 5.0,
        "tolerance": 0.02
      },
      {
        "label": "无税Q",
        "value": 2000.0,
        "tolerance": 0.02
      },
      {
        "label": "税后买方价",
        "value": 5.5,
        "tolerance": 0.02
      },
      {
        "label": "税后卖方价",
        "value": 4.6,
        "tolerance": 0.02
      },
      {
        "label": "税后Q",
        "value": 1800.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MC=0.2q+1，行业供给Q=500(Ps−1)。无税联立P=5。税后Ps=Pb−0.9，得Pb=5.5、Ps=4.6、Q=1800。",
    "source": "高鸿业第8版·配套题库·章节六·计算3 · PDF 171页（分问核算整理）",
    "bankId": "六-calc-3"
  },
  {
    "type": "calc",
    "topic": 34,
    "title": "LTC=(2/3)Q³−16Q²+180Q，STC=2Q³−24Q²+120Q+400。求长期最低可持续价、短期停产价，以及P=120时短期最优产量。",
    "fields": [
      {
        "label": "长期最低价",
        "value": 84.0,
        "tolerance": 0.02
      },
      {
        "label": "短期停产价",
        "value": 48.0,
        "tolerance": 0.02
      },
      {
        "label": "短期最优Q",
        "value": 8.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "LAC=(2/3)Q²−16Q+180，最低Q12、值84。AVC=2Q²−24Q+120，最低Q6、值48。SMC=6Q²−48Q+120=120取上升段Q8。",
    "source": "高鸿业第8版·配套题库·章节六·计算4 · PDF 172页（分问核算整理）",
    "bankId": "六-calc-4"
  },
  {
    "type": "calc",
    "topic": 34,
    "title": "成本不变的自由进入行业，代表厂商LTC=Q³−12Q²+40Q。求长期单厂均衡产量与价格。",
    "fields": [
      {
        "label": "单厂Q",
        "value": 6.0,
        "tolerance": 0.02
      },
      {
        "label": "价格",
        "value": 4.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "LAC=Q²−12Q+40，在Q6最小，值36−72+40=4；标准长期均衡P=minLAC。",
    "source": "高鸿业第8版·配套题库·章节六·计算5 · PDF 172页（分问核算整理）",
    "bankId": "六-calc-5"
  },
  {
    "type": "calc",
    "topic": 7,
    "title": "100家同成本企业，各STC=q²+6q+20，市场Qd=420−30Pb。求无税价格和行业数量；单位税1.6后求买方价、卖方价和数量。",
    "fields": [
      {
        "label": "无税价",
        "value": 9.0,
        "tolerance": 0.02
      },
      {
        "label": "无税Q",
        "value": 150.0,
        "tolerance": 0.02
      },
      {
        "label": "税后买方价",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "税后卖方价",
        "value": 8.4,
        "tolerance": 0.02
      },
      {
        "label": "税后Q",
        "value": 120.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "单厂q=(Ps−6)/2，行业Q=50Ps−300。无税联立得P9、Q150。税后Pb=Ps+1.6，联立得Pb10、Ps8.4、Q120。",
    "source": "高鸿业第8版·配套题库·章节六·计算7 · PDF 173页（分问核算整理）",
    "bankId": "六-calc-7"
  },
  {
    "type": "calc",
    "topic": 33,
    "title": "竞争厂商STC=0.04Q³−0.4Q²+8Q+9，P=12。求最优产量、经济利润与生产者剩余。",
    "fields": [
      {
        "label": "Q",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "利润",
        "value": 31.0,
        "tolerance": 0.02
      },
      {
        "label": "生产者剩余",
        "value": 40.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MC=0.12Q²−0.8Q+8=12，正上升段解10。TC=89、TR=120、π=31，PS=π+FC=40。",
    "source": "高鸿业第8版·配套题库·章节六·计算8 · PDF 173页（分问核算整理）",
    "bankId": "六-calc-8"
  },
  {
    "type": "calc",
    "topic": 24,
    "title": "完全竞争行业q=√(KL)，w=4、r=1，需求Q=1000−50P。自由进入、常数单位成本。求长期价格、行业Q、行业劳动与资本总量。",
    "fields": [
      {
        "label": "价格",
        "value": 4.0,
        "tolerance": 0.02
      },
      {
        "label": "行业Q",
        "value": 800.0,
        "tolerance": 0.02
      },
      {
        "label": "总L",
        "value": 400.0,
        "tolerance": 0.02
      },
      {
        "label": "总K",
        "value": 1600.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "成本最小K=4L，q=2L，单位成本(4L+K)/q=4。长期P4、Q800，故总L400、K1600。",
    "source": "高鸿业第8版·配套题库·章节六·计算11 · PDF 175页（分问核算整理）",
    "bankId": "六-calc-11"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "垄断需求Q=100−5Pb，MC=10，无固定成本。求无税价格；单位税2后求买方价、数量和利润。",
    "fields": [
      {
        "label": "无税价",
        "value": 15.0,
        "tolerance": 0.02
      },
      {
        "label": "税后买方价",
        "value": 16.0,
        "tolerance": 0.02
      },
      {
        "label": "税后Q",
        "value": 20.0,
        "tolerance": 0.02
      },
      {
        "label": "税后利润",
        "value": 80.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "反需求Pb=20−0.2Q，MR=20−0.4Q。无税Q25、P15。含税边际支出12，Q20、Pb16、Ps14，利润(14−10)×20=80。",
    "source": "高鸿业第8版·配套题库·章节七·计算1 · PDF 205页（分问核算整理）",
    "bankId": "七-calc-1"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "TC=2Q²−20Q+50，最优时P=5、需求弹性绝对值5。求MR、Q与利润。",
    "fields": [
      {
        "label": "MR",
        "value": 4.0,
        "tolerance": 0.02
      },
      {
        "label": "Q",
        "value": 6.0,
        "tolerance": 0.02
      },
      {
        "label": "利润",
        "value": 28.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MR=P(1−1/ed)=4。MC=4Q−20=4得Q6，TC2，TR30，利润28。",
    "source": "高鸿业第8版·配套题库·章节七·计算3 · PDF 206页（分问核算整理）",
    "bankId": "七-calc-3"
  },
  {
    "type": "calc",
    "topic": 12,
    "title": "垄断P=10−Q，TC=2Q。求垄断产量、价格、利润及消费者剩余；再求按P=MC配置时消费者剩余。",
    "fields": [
      {
        "label": "垄断Q",
        "value": 4.0,
        "tolerance": 0.02
      },
      {
        "label": "垄断P",
        "value": 6.0,
        "tolerance": 0.02
      },
      {
        "label": "利润",
        "value": 16.0,
        "tolerance": 0.02
      },
      {
        "label": "垄断CS",
        "value": 8.0,
        "tolerance": 0.02
      },
      {
        "label": "竞争基准CS",
        "value": 32.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MR=10−2Q=2得Q4、P6，π16；CS=½×4×4=8。竞争基准P2、Q8，CS=½×8×8=32。",
    "source": "高鸿业第8版·配套题库·章节七·计算5 · PDF 207页（分问核算整理）",
    "bankId": "七-calc-5"
  },
  {
    "type": "calc",
    "topic": 74,
    "title": "50家竞争厂商各c(y)=y²/2，市场D(P)=1000−50P，领导者MC=0。求领导者最优产量、价格、每家竞争者产量。",
    "fields": [
      {
        "label": "领导者Q",
        "value": 500.0,
        "tolerance": 0.02
      },
      {
        "label": "价格",
        "value": 5.0,
        "tolerance": 0.02
      },
      {
        "label": "每家竞争者y",
        "value": 5.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "竞争者按P=MC=y供给，合计50P。剩余需求Q=1000−100P，MR=10−0.02Q=0得Q500、P5，每家供给5。",
    "source": "高鸿业第8版·配套题库·章节七·计算7 · PDF 208页（分问核算整理）",
    "bankId": "七-calc-7"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "垄断两厂TCL=5+9qL+qL²，TCH=4+10qH+0.5qH²，需求P=31−(qL+qH)。求qL、qH、总量和价格。",
    "fields": [
      {
        "label": "qL",
        "value": 3.0,
        "tolerance": 0.02
      },
      {
        "label": "qH",
        "value": 5.0,
        "tolerance": 0.02
      },
      {
        "label": "总Q",
        "value": 8.0,
        "tolerance": 0.02
      },
      {
        "label": "P",
        "value": 23.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "令9+2qL=10+qH=31−2(qL+qH)，解得qL3、qH5，Q8、P23。",
    "source": "高鸿业第8版·配套题库·章节七·计算8 · PDF 209页（分问核算整理）",
    "bankId": "七-calc-8"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "垄断AC=600/Q+50，需求Q=300−2Pb。求无税产量与利润；消费者每单位税10后求买方价、数量与利润。",
    "fields": [
      {
        "label": "原Q",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "原利润",
        "value": 4400.0,
        "tolerance": 0.02
      },
      {
        "label": "新买方价",
        "value": 105.0,
        "tolerance": 0.02
      },
      {
        "label": "新Q",
        "value": 90.0,
        "tolerance": 0.02
      },
      {
        "label": "新利润",
        "value": 3450.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "无税MR=150−Q=50，Q100、P100，利润5000−600=4400。税后等效MC60，Q90、Pb105、Ps95，利润(95−50)×90−600=3450。",
    "source": "高鸿业第8版·配套题库·章节七·计算10 · PDF 209页（分问核算整理）",
    "bankId": "七-calc-10"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "垄断P=10−3Q，TC=2Q+Q²。求原最优产量和利润，以及强制P=MC的数量和价格。",
    "fields": [
      {
        "label": "垄断Q",
        "value": 1.0,
        "tolerance": 0.02
      },
      {
        "label": "垄断利润",
        "value": 4.0,
        "tolerance": 0.02
      },
      {
        "label": "竞争基准Q",
        "value": 1.6,
        "tolerance": 0.02
      },
      {
        "label": "竞争基准P",
        "value": 5.2,
        "tolerance": 0.02
      }
    ],
    "explanation": "MR10−6Q=MC2+2Q得Q1、P7、π4。P=MC给出10−3Q=2+2Q，Q1.6、P5.2。",
    "source": "高鸿业第8版·配套题库·章节七·计算13 · PDF 211页（分问核算整理）",
    "bankId": "七-calc-13"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "垄断P=90−0.5Q、TC=10Q+0.5Q²。求无管制产量和利润；最高限价50时，求厂商产量与市场需求量。",
    "fields": [
      {
        "label": "原Q",
        "value": 40.0,
        "tolerance": 0.02
      },
      {
        "label": "原利润",
        "value": 1600.0,
        "tolerance": 0.02
      },
      {
        "label": "限价后厂商Q",
        "value": 40.0,
        "tolerance": 0.02
      },
      {
        "label": "限价后市场需求",
        "value": 80.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "无管制MR90−Q=10+Q得Q40，P70，利润1600。限价50下在Q≤80收入斜率50，MC=10+Q=50得Q40；需求量80，短缺40。",
    "source": "高鸿业第8版·配套题库·章节七·计算14 · PDF 212页（分问核算整理）",
    "bankId": "七-calc-14"
  },
  {
    "type": "calc",
    "topic": 40,
    "title": "双寡头古诺P=30−q₁−q₂，MC₁=3、MC₂=6，无固定成本。求双方产量、价格和双方利润。",
    "fields": [
      {
        "label": "q1",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "q2",
        "value": 7.0,
        "tolerance": 0.02
      },
      {
        "label": "P",
        "value": 13.0,
        "tolerance": 0.02
      },
      {
        "label": "利润1",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "利润2",
        "value": 49.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "反应函数q1=(27−q2)/2，q2=(24−q1)/2，联立得10、7，价格13，利润(13−3)×10=100、(13−6)×7=49。",
    "source": "高鸿业第8版·配套题库·章节七·计算17 · PDF 213页（分问核算整理）",
    "bankId": "七-calc-17"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "两厂TC₁=0.5q₁²+20q₁，TC₂=q₂²+30q₂，需求P=100−0.5(q₁+q₂)。求最优两厂产量和价格。",
    "fields": [
      {
        "label": "q1",
        "value": 34.0,
        "tolerance": 0.02
      },
      {
        "label": "q2",
        "value": 12.0,
        "tolerance": 0.02
      },
      {
        "label": "P",
        "value": 77.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MC1=q1+20，MC2=2q2+30；共同MR=100−q1−q2。联立得q1=34、q2=12，总46，P77。",
    "source": "高鸿业第8版·配套题库·章节七·计算18 · PDF 214页（分问核算整理）",
    "bankId": "七-calc-18"
  },
  {
    "type": "calc",
    "topic": 45,
    "title": "Q=48√(LK)，P=50，w=14400，短期K=3600。求劳动最优量；长期单位资本价r上升直至零经济利润，求r。",
    "fields": [
      {
        "label": "短期L",
        "value": 25.0,
        "tolerance": 0.02
      },
      {
        "label": "长期r",
        "value": 100.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "短期VMP=72000/√L=w，得L25。长期单位成本2√(14400r)/48=50，解r100。",
    "source": "高鸿业第8版·配套题库·章节八·计算2 · PDF 237页（分问核算整理）",
    "bankId": "八-calc-2"
  },
  {
    "type": "calc",
    "topic": 48,
    "title": "劳动DL=150−10W、SL=20W。求均衡工资和就业；若法定最低工资6，求劳动需求、供给和失业量。",
    "fields": [
      {
        "label": "均衡W",
        "value": 5.0,
        "tolerance": 0.02
      },
      {
        "label": "均衡L",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "最低工资下需求",
        "value": 90.0,
        "tolerance": 0.02
      },
      {
        "label": "最低工资下供给",
        "value": 120.0,
        "tolerance": 0.02
      },
      {
        "label": "失业量",
        "value": 30.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "联立150−10W=20W，W5、L100。W6时需求90、供给120，超额供给30。",
    "source": "高鸿业第8版·配套题库·章节八·计算3 · PDF 238页（分问核算整理）",
    "bankId": "八-calc-3"
  },
  {
    "type": "calc",
    "topic": 47,
    "title": "每日24小时，闲暇L、工资R、劳动收入Y=R(24−L)，U=48L+LY−L²。求R=1、R=2时劳动时数及工资趋无穷时的劳动时数极限。",
    "fields": [
      {
        "label": "R=1劳动时数",
        "value": 6.0,
        "tolerance": 0.02
      },
      {
        "label": "R=2劳动时数",
        "value": 8.0,
        "tolerance": 0.02
      },
      {
        "label": "极限劳动时数",
        "value": 12.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "代入收入后U=(48+24R)L−(1+R)L²。最优闲暇12(R+2)/(R+1)，劳动W=12R/(R+1)，代入得到6、8、极限12。",
    "source": "高鸿业第8版·配套题库·章节八·计算5 · PDF 239页（分问核算整理）",
    "bankId": "八-calc-5"
  },
  {
    "type": "calc",
    "topic": 58,
    "title": "总禀赋(x,y)=(120,120)，UA=xAyA、UB=40(xB+yB)，社会福利W=UA×UB。求最大化W时A与B的消费组合。",
    "fields": [
      {
        "label": "xA",
        "value": 80.0,
        "tolerance": 0.02
      },
      {
        "label": "yA",
        "value": 80.0,
        "tolerance": 0.02
      },
      {
        "label": "xB",
        "value": 40.0,
        "tolerance": 0.02
      },
      {
        "label": "yB",
        "value": 40.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "用B的剩余资源代入，W=40xAyA(240−xA−yA)。一阶条件得到2xA+yA=240、xA+2yA=240，故A各80，B各40；边界福利更低。",
    "source": "高鸿业第8版·配套题库·章节九·计算4 · PDF 260页（分问核算整理）",
    "bankId": "九-calc-4"
  },
  {
    "type": "calc",
    "topic": 57,
    "title": "社会福利W=(q₁+2)q₂，生产约束q₁+2q₂=10、产出非负。求最优q₁、q₂与W。",
    "fields": [
      {
        "label": "q1",
        "value": 4.0,
        "tolerance": 0.02
      },
      {
        "label": "q2",
        "value": 3.0,
        "tolerance": 0.02
      },
      {
        "label": "W",
        "value": 18.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "代入q1=10−2q2，W=(12−2q2)q2，导数12−4q2=0，q2=3、q1=4，W18。",
    "source": "高鸿业第8版·配套题库·章节九·计算5 · PDF 261页（分问核算整理）",
    "bankId": "九-calc-5"
  },
  {
    "type": "calc",
    "topic": 57,
    "title": "生产可能性边界x²+y²=100，x,y≥0，社会效用U=xy。求最优x、y及最大效用。",
    "fields": [
      {
        "label": "x",
        "value": 7.071068,
        "tolerance": 0.02
      },
      {
        "label": "y",
        "value": 7.071068,
        "tolerance": 0.02
      },
      {
        "label": "最大U",
        "value": 50.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MRS=y/x，MRT=x/y。内点效率使x=y，代入边界得各√50；xy≤(x²+y²)/2=50验证全局最优。",
    "source": "高鸿业第8版·配套题库·章节九·计算6 · PDF 261页（分问核算整理）",
    "bankId": "九-calc-6"
  },
  {
    "type": "calc",
    "topic": 36,
    "title": "垄断P=10−2q，TC=q²+4q。求利润最大产量、价格与利润；若要求P=MC，再求相应产量和价格。",
    "fields": [
      {
        "label": "垄断q",
        "value": 1.0,
        "tolerance": 0.02
      },
      {
        "label": "垄断P",
        "value": 8.0,
        "tolerance": 0.02
      },
      {
        "label": "垄断利润",
        "value": 3.0,
        "tolerance": 0.02
      },
      {
        "label": "P=MC时q",
        "value": 1.5,
        "tolerance": 0.02
      },
      {
        "label": "P=MC时价格",
        "value": 7.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "MR10−4q=MC2q+4，得q1、P8、π3。按P=MC：10−2q=2q+4，得q1.5、P7。",
    "source": "高鸿业第8版·配套题库·章节十一·计算1 · PDF 294页（分问核算整理）",
    "bankId": "十一-calc-1"
  },
  {
    "type": "calc",
    "topic": 68,
    "title": "垄断需求P=420−q，私人MC=3q，边际外部成本2q。求私人垄断产量、社会最优产量，以及使该垄断者选择社会最优量的单位税。",
    "fields": [
      {
        "label": "私人垄断q",
        "value": 84.0,
        "tolerance": 0.02
      },
      {
        "label": "社会最优q",
        "value": 70.0,
        "tolerance": 0.02
      },
      {
        "label": "诱导最优的单位税",
        "value": 70.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "私人MR=420−2q=3q，q84；社会最优MB=420−q=5q，q70。对垄断者，税须使MR(70)=MC(70)+t，280=210+t，t70。不能直接套竞争模型的MEC税140。",
    "source": "高鸿业第8版·配套题库·章节十一·计算2 · PDF 295页（分问核算整理）",
    "bankId": "十一-calc-2"
  },
  {
    "type": "calc",
    "topic": 68,
    "title": "苹果价3、蜂蜜价2，苹果成本CA=A²/100−H，蜂蜜成本CH=H²/100。求分开经营时A、H及合并经营时A、H，并求使独立蜂场选择社会最优量的单位补贴。",
    "fields": [
      {
        "label": "独立A",
        "value": 150.0,
        "tolerance": 0.02
      },
      {
        "label": "独立H",
        "value": 100.0,
        "tolerance": 0.02
      },
      {
        "label": "合并A",
        "value": 150.0,
        "tolerance": 0.02
      },
      {
        "label": "合并H",
        "value": 150.0,
        "tolerance": 0.02
      },
      {
        "label": "蜂蜜单位补贴",
        "value": 1.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "独立时3=.02A、2=.02H。合并后蜂蜜额外为苹果降低成本1，故3=.02H得150；苹果仍150。蜂蜜正外部性为1，单位补贴1。",
    "source": "高鸿业第8版·配套题库·章节十一·计算4 · PDF 296页（分问核算整理）",
    "bankId": "十一-calc-4"
  },
  {
    "type": "calc",
    "topic": 68,
    "title": "A产x，CA=2x²；B产y，CB=y²+2xy，价格分别80与60。求独立经营x、y；再求社会联合最优x、y，以及诱导最优x的单位税。",
    "fields": [
      {
        "label": "独立x",
        "value": 20.0,
        "tolerance": 0.02
      },
      {
        "label": "独立y",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "联合最优x",
        "value": 10.0,
        "tolerance": 0.02
      },
      {
        "label": "联合最优y",
        "value": 20.0,
        "tolerance": 0.02
      },
      {
        "label": "单位税",
        "value": 40.0,
        "tolerance": 0.02
      }
    ],
    "explanation": "独立A：80−4x=0，x20；B：60−2y−2x=0，y10。联合条件80−4x−2y=0与60−2y−2x=0得10、20。MEC=2y=40，给A单位税40。",
    "source": "高鸿业第8版·配套题库·章节十一·计算5 · PDF 296页（分问核算整理）",
    "bankId": "十一-calc-5"
  },
  {
    "type": "graph",
    "topic": 3,
    "title": "画技术进步导致的供给增加，保持需求不变，标出两个均衡和价格、数量变化。",
    "graph": "supply",
    "explanation": "供给向右下移动，沿既定需求线新均衡价格下降、数量增加。",
    "rubric": [
      "P、Q坐标（2分）",
      "S右移、D不变（3分）",
      "两个交点（3分）",
      "P下降Q增加（2分）"
    ],
    "source": "高鸿业第8版·笔记·章节2复习图形 · PDF 13页（仅图形要求整理）",
    "bankId": "graph-supply"
  },
  {
    "type": "graph",
    "topic": 7,
    "title": "画单位税在买卖双方价格间形成的楔子，标出税后交易量和税收收入矩形。",
    "graph": "tax",
    "explanation": "税后买方价格高于卖方净价，垂直差为单位税t。交易量下降，矩形t×Qt为税收，减少交易的三角形为无谓损失。",
    "rubric": [
      "原均衡（2分）",
      "买方价和卖方净价（3分）",
      "税收矩形（3分）",
      "交易量减少（2分）"
    ],
    "source": "高鸿业第8版·笔记·章节2复习图形 · PDF 26页（仅图形要求整理）",
    "bankId": "graph-tax"
  },
  {
    "type": "graph",
    "topic": 13,
    "title": "分别画完全替代品与完全互补品的无差异曲线，并说明MRS的特点。",
    "graph": "special",
    "explanation": "完全替代品为平行直线，MRS恒定；完全互补品为L形，拐点不光滑，不能机械套用光滑相切条件。",
    "rubric": [
      "两幅坐标（2分）",
      "平行直线（3分）",
      "L形曲线（3分）",
      "区分MRS与拐点（2分）"
    ],
    "source": "高鸿业第8版·笔记·章节3复习图形 · PDF 49页（仅图形要求整理）",
    "bankId": "graph-special"
  },
  {
    "type": "graph",
    "topic": 24,
    "title": "画给定产量下成本最小化的等产量线与等成本线，标记内点最优组合并写条件。",
    "graph": "producer",
    "explanation": "在给定等产量线上，最低可达成本线与其相切。内点MRTS=MP_L/MP_K=w/r；边界或固定比例不能直接套用。",
    "rubric": [
      "等产量线凸形（2分）",
      "等成本线斜率（2分）",
      "相切点（3分）",
      "价格比与技术替代率（3分）"
    ],
    "source": "高鸿业第8版·笔记·章节4复习图形 · PDF 91页（仅图形要求整理）",
    "bankId": "graph-producer"
  },
  {
    "type": "graph",
    "topic": 30,
    "title": "画完全竞争企业短期盈利的图，标出P=MR、MC、AC、最优产量和利润矩形。",
    "graph": "competition",
    "explanation": "P与上升MC相交确定Q*；该产量P高于AC，利润矩形高度P−AC、宽度Q*。",
    "rubric": [
      "水平价格线（2分）",
      "MC决定数量（3分）",
      "AC低于价格（2分）",
      "利润矩形（3分）"
    ],
    "source": "高鸿业第8版·笔记·章节6复习图形 · PDF 151页（仅图形要求整理）",
    "bankId": "graph-competition"
  },
  {
    "type": "graph",
    "topic": 6,
    "title": "画有效最高限价，标出需求量、供给量、实际可交易量和短缺区间。",
    "graph": "ceiling",
    "explanation": "低于均衡价的最高限价使Qd>Qs，若没有额外供给或违规交易，数量受较少的供给量限制。",
    "rubric": [
      "限价低于均衡（3分）",
      "Qd与Qs（3分）",
      "短缺差额（2分）",
      "实际交易受供给限制（2分）"
    ],
    "source": "高鸿业第8版·笔记·章节6复习图形 · PDF 165页（仅图形要求整理）",
    "bankId": "graph-ceiling"
  },
  {
    "type": "graph",
    "topic": 8,
    "title": "画线性需求对应的总收益曲线，标出单位弹性时的总收益最大点。",
    "graph": "revenue",
    "explanation": "P=a−bQ时TR=aQ−bQ²，为开口向下抛物线。MR=0即Q=a/(2b)，对应需求中点、单位弹性。",
    "rubric": [
      "坐标Q和TR（2分）",
      "开口向下（3分）",
      "最大点（2分）",
      "MR=0与单位弹性（3分）"
    ],
    "source": "高鸿业第8版·笔记·章节2复习图形 · PDF 21页（仅图形要求整理）",
    "bankId": "graph-revenue"
  },
  {
    "type": "graph",
    "topic": 67,
    "title": "画绝对平等线与一条洛伦兹曲线，并指出基尼系数的面积含义。",
    "graph": "lorenz",
    "explanation": "横轴累计人口比例，纵轴累计收入比例。洛伦兹曲线越贴近平等线通常越平等，G为两线间面积除以平等线下总面积。",
    "rubric": [
      "人口收入累计比例（2分）",
      "45度线（2分）",
      "洛伦兹曲线（3分）",
      "基尼面积比（3分）"
    ],
    "source": "高鸿业第8版·笔记·章节8复习图形 · PDF 222页（仅图形要求整理）",
    "bankId": "graph-lorenz"
  },
  {
    "type": "graph",
    "topic": 55,
    "title": "在埃奇沃斯交换盒中画两人的相切无差异曲线与契约线，说明曲线上点的含义。",
    "graph": "contract",
    "explanation": "盒子宽高为商品总量，两原点在相对角。通常内点有效交换配置满足MRS_A=MRS_B，契约线连接有效配置；不是所有任意契约。",
    "rubric": [
      "盒子和两原点（3分）",
      "双方无差异线相切（3分）",
      "契约线（2分）",
      "MRS相等条件（2分）"
    ],
    "source": "高鸿业第8版·笔记·章节9复习图形 · PDF 238页（仅图形要求整理）",
    "bankId": "graph-contract"
  },
  {
    "type": "graph",
    "topic": 72,
    "title": "画两个人对同一公共物品的边际支付意愿，并示意纵向加总后的社会边际收益与MC交点。",
    "graph": "public",
    "explanation": "相同公共物品数量供多人消费，应纵向加总边际支付意愿；在个人边际支付不为负的相关区间，ΣMB=MC决定最优量。",
    "rubric": [
      "同一Q下加总（3分）",
      "个人MB与总MB（3分）",
      "MC交点（2分）",
      "说明不是横向加总（2分）"
    ],
    "source": "高鸿业第8版·笔记·章节11复习图形 · PDF 279页（仅图形要求整理）",
    "bankId": "graph-public"
  },
  {
    "type": "graph",
    "topic": 18,
    "title": "画风险厌恶者的财富效用曲线及两个财富结果间的弦，比较期望效用与期望财富的效用。",
    "graph": "risk",
    "explanation": "风险厌恶通常对应凹效用。两结果效用的概率加权值在弦上，U(Ew)在曲线上且不低于EU；确定性等价不高于期望财富。",
    "rubric": [
      "财富效用坐标（2分）",
      "凹曲线（2分）",
      "弦与概率点（3分）",
      "U(Ew)≥EU（3分）"
    ],
    "source": "高鸿业第8版·笔记·章节3复习图形 · PDF 60页（仅图形要求整理）",
    "bankId": "graph-risk"
  },
  {
    "type": "graph",
    "topic": 21,
    "title": "在上下两个面板画TP以及AP、MP的典型关系，标出AP最大点和TP最大点对应劳动量。",
    "graph": "production",
    "explanation": "AP最大处MP=AP，TP最大处MP=0。这两个劳动量不同，通常AP最大点在TP最大点之前。",
    "rubric": [
      "两面板劳动轴一致（2分）",
      "AP与MP交点（3分）",
      "TP最大时MP为零（3分）",
      "两个劳动量的次序（2分）"
    ],
    "source": "高鸿业第8版·笔记·章节4复习图形 · PDF 89页（仅图形要求整理）",
    "bankId": "graph-production"
  }
]);
