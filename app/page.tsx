"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, CheckCircle, MessageSquare, Phone, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// TIPの型定義
type TruckTip = {
  title: string;
  content: string;
  category: string;
  impact: string;
}

// Service details data
const serviceDetails = [
  {
    id: "website",
    title: "販売サイト構築",
    description: "在庫管理・問い合わせ機能を備えた専用サイトを構築。お客様が欲しい情報にすぐアクセスできる設計です。",
    features: ["在庫情報自動更新", "詳細スペック表示", "問い合わせフォーム", "レスポンシブデザイン"],
    image: "/sit.png?height=200&width=300",
    fullDescription: `
      <h3 class="text-lg font-semibold mb-4">トラック販売に特化したウェブサイト構築</h3>
      <p class="mb-4">中古トラック販売事業者様向けに、最適化された販売サイトを構築いたします。従来の展示場に足を運ぶ必要があった顧客体験を、いつでもどこでもアクセス可能なオンライン体験へと転換します。</p>
      
      <h4 class="font-medium mt-6 mb-2">主な機能</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><span class="font-medium">在庫情報リアルタイム連携：</span>管理システムと連動し、在庫情報を自動的に更新。手動更新の手間を省き、常に最新の情報を顧客に提供します。</li>
        <li><span class="font-medium">詳細スペック表示：</span>車種ごとの詳細情報を分かりやすく表示。エンジン情報、走行距離、車検情報など、顧客が求める情報を網羅します。</li>
        <li><span class="font-medium">360度ビュー：</span>車両の内外装を360度で確認できる機能を搭載可能。実際に見学するような体験を提供します。</li>
        <li><span class="font-medium">問い合わせ・見積もりフォーム：</span>顧客からの問い合わせを24時間受け付け、営業担当者に即時通知します。</li>
      </ul>

      <h4 class="font-medium mt-6 mb-2">導入メリット</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>営業時間外でも問い合わせ受付が可能になり、商談機会の損失を防ぎます</li>
        <li>顧客は実際に展示場に足を運ぶ前に詳細な情報を得ることができ、来場時の成約率が高まります</li>
        <li>検索エンジン対策により、新規顧客からの問い合わせ増加が期待できます</li>
        <li>スマートフォン対応により、いつでもどこでも閲覧可能です</li>
      </ul>
    `,
  },
  {
    id: "tools",
    title: "業務効率化ツール",
    description:
      "顧客管理・見積管理・LINE通知など、業務を効率化するツールを提供。属人化を防ぎ、組織的な営業活動を実現します。",
    features: ["顧客情報一元管理", "見積書自動作成", "LINE通知連携", "営業進捗管理"],
    image: "/tool2.png?height=200&width=300",
    fullDescription: `
      <h3 class="text-lg font-semibold mb-4">トラック販売業務を効率化する業務支援ツール</h3>
      <p class="mb-4">トラック販売事業における日々の業務を効率化し、属人化を防ぐための業務支援ツールをご提供します。顧客情報の一元管理から見積書作成、進捗管理まで、販売プロセス全体をデジタル化します。</p>
      
      <h4 class="font-medium mt-6 mb-2">主な機能</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><span class="font-medium">顧客情報一元管理：</span>顧客情報をクラウド上で一元管理。商談履歴や対応履歴もすべて記録し、担当者が不在でも対応可能にします。</li>
        <li><span class="font-medium">見積書自動作成：</span>車両情報を選択するだけで見積書を自動作成。計算ミスや転記ミスを防ぎ、迅速な対応が可能になります。</li>
        <li><span class="font-medium">LINE通知連携：</span>問い合わせや商談の進捗をLINEで通知。外出先でもリアルタイムに情報を確認できます。</li>
        <li><span class="font-medium">営業進捗管理：</span>商談の進捗状況をビジュアル化。案件の滞留や優先順位を一目で確認できます。</li>
        <li><span class="font-medium">在庫管理システム：</span>入庫・出庫管理や車検切れ、整備スケジュールなどを管理し、在庫の最適化を支援します。</li>
      </ul>

      <h4 class="font-medium mt-6 mb-2">導入メリット</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>情報の属人化を防ぎ、組織全体で顧客情報を共有できるようになります</li>
        <li>業務の標準化により、担当者によるバラつきがなくなります</li>
        <li>ペーパーレス化により、文書管理コストを削減できます</li>
        <li>データに基づく意思決定が可能になり、在庫回転率や成約率の向上につながります</li>
        <li>社外からもアクセス可能なため、テレワークにも対応できます</li>
      </ul>
    `,
  },
  {
    id: "marketing",
    title: "広告/SNS運用支援",
    description: "Facebook/Instagram広告の運用代行やコンテンツ提案を行い、効果的な集客を実現します。",
    features: ["広告運用代行", "コンテンツ制作", "効果測定・分析", "SNSアカウント運用"],
    image: "/sns.png?height=200&width=300",
    fullDescription: `
      <h3 class="text-lg font-semibold mb-4">トラック販売のための広告・SNS運用支援</h3>
      <p class="mb-4">トラック販売における効果的な集客を実現するため、デジタル広告やSNS運用をトータルでサポートします。ターゲット顧客へのリーチを最大化し、費用対効果の高いマーケティング活動を実現します。</p>
      
      <h4 class="font-medium mt-6 mb-2">主なサービス</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><span class="font-medium">Facebook/Instagram広告運用：</span>ターゲット層に向けた最適な広告を設計・配信。広告予算の無駄を省き、効果的なリーチを実現します。</li>
        <li><span class="font-medium">Google広告運用：</span>検索意図の高いユーザーにアプローチするリスティング広告の運用を代行します。</li>
        <li><span class="font-medium">SNSアカウント運用代行：</span>Facebook、InstagramなどのSNSアカウントの投稿代行。トラックに関する有益な情報を定期的に発信し、ファン化を促進します。</li>
        <li><span class="font-medium">コンテンツ制作：</span>車両紹介記事やメンテナンスTips、業界動向など、トラックオーナーに有益なコンテンツを制作・提供します。</li>
        <li><span class="font-medium">効果測定・改善：</span>広告運用の効果を数値で可視化し、継続的な改善を行います。費用対効果の最大化を目指します。</li>
      </ul>

      <h4 class="font-medium mt-6 mb-2">導入メリット</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>専門知識がなくても、効果的なマーケティング活動が可能になります</li>
        <li>ターゲティングの最適化により、広告費用対効果が向上します</li>
        <li>定期的な情報発信により、ブランド認知度が向上します</li>
        <li>データに基づいた広告運用により、継続的な改善が可能です</li>
        <li>オンライン上での存在感を高め、競合他社との差別化が図れます</li>
      </ul>
    `,
  },
]

// トラック販売のTIPデータ
const truckTips: TruckTip[] = [
  {
    title: "在庫車両ページの効果的な見せ方",
    content: "「このトラックは◯◯工事で活躍しています」といった具体的な使用事例を記載することで、購入者の安心感を高めます。BtoBでは「機能」より「用途の適合性」が決め手になりやすいため、実際の利用シーンをイメージできる情報が重要です。",
    category: "販売促進",
    impact: "成約率向上"
  },
  {
    title: "問い合わせフォームの最適化",
    content: "用途（建設・運送・農業など）を選ばせるチェック項目を追加することで、用途に合った提案やアップセル（荷台サイズ変更、ナビ付きなど）がしやすくなります。相手の課題に合わせた提案が可能になり、商談の質と成約率が向上します。",
    category: "営業効率化",
    impact: "商談品質向上"
  },
  {
    title: "LINE公式アカウントの活用",
    content: "入荷情報や値下げ情報を画像付きで週1配信することで、メールと比べて2〜3倍の開封率を実現できます。スマホで即見られる特性を活かし、「今すぐ買いたい」層にリアルタイムでアプローチできます。",
    category: "集客",
    impact: "問い合わせ増加"
  },
  {
    title: "商談中・成約済トラックの活用",
    content: "「このトラックは販売済」と表示しつつ、似た車両へのリンクを設置することで、希少性の原理を活用できます。欲しかった車が「売れてしまった」という心理が「早く買おう」という行動に変わります。",
    category: "販売促進",
    impact: "成約スピード向上"
  },
  {
    title: "納期表示の重要性",
    content: "各車両ページに「今なら最短○日で納車」と記載することで、買い手の「いつ使えるか」という関心に応えます。特に急ぎで探している業者には大きなアピールポイントとなり、成約の決め手になります。",
    category: "販売促進",
    impact: "成約率向上"
  },
  {
    title: "閲覧履歴を活用した営業",
    content: "どの車種を何回見たか、閲覧ログをもとに見込み度をランク化することで、検討度が高いユーザーを優先フォローできます。「ご覧になっていた〇〇について…」と切り出すことで、より良い反応が得られます。",
    category: "営業効率化",
    impact: "営業効率向上"
  },
  {
    title: "動画コンテンツの活用",
    content: "走行中の動画、エンジン音、ウィンカー点灯などをYouTubeで紹介することで、「音や動き」で安心感を与えられます。静止画より信頼性がアップし、遠方・海外ユーザーにもアピール可能です。",
    category: "集客",
    impact: "信頼性向上"
  },
  {
    title: "オンライン審査の導入",
    content: "購入ページからローン仮審査ができる仕組みを導入することで、商談スピードが早まります。「審査次第で購入検討中」という層を確実に取り込め、フォーム入力のみで仮審査できることでハードルが下がります。",
    category: "営業効率化",
    impact: "成約スピード向上"
  },
  {
    title: "Instagramでの差別化",
    content: "車内、タイヤ、下回り、ライトなど「普通は見せない部分」を投稿することで、マニア層や整備に詳しい業者に「信頼できる販売者」と認識されやすくなります。ファン化につながり、リピート率が向上します。",
    category: "集客",
    impact: "信頼性向上"
  },
  {
    title: "ターゲティング広告の活用",
    content: "「福岡県の建設業者」などピンポイントに広告出稿することで、広告コストを抑えつつ、成約見込みの高い層にリーチできます。特に地方の中小業者には効果が高く、ROIの向上が期待できます。",
    category: "集客",
    impact: "広告効果向上"
  }
]

export default function Home() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null)
  const [isAIConsultationOpen, setIsAIConsultationOpen] = useState(false)
  const [randomTip, setRandomTip] = useState<TruckTip | null>(null)

  const handleAIConsultationClick = () => {
    const randomIndex = Math.floor(Math.random() * truckTips.length)
    setRandomTip(truckTips[randomIndex])
    setIsAIConsultationOpen(true)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">TruckBase</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600">
              サービス
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-blue-600">
              導入事例
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-blue-600">
              よくある質問
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600">
              無料相談
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button variant="outline" className="hidden md:flex">
              資料請求する
            </Button> */}
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={scrollToContact}
            >
              まずは無料相談
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/top.png?height=800&width=1600" alt="トラック展示場" fill className="object-cover" />
        </div>
        <div className="container relative py-20 md:py-32">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-400 bg-blue-500/20 px-3 py-1 text-sm">
              <span className="mr-1 rounded-full bg-blue-500 px-1.5 py-0.5 text-xs font-medium">New</span>
              <span className="font-medium">トラック販売業界特化型DXサービス</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              トラック販売に、
              <br />
              <span className="text-blue-300">"売れる仕組み"</span>を。
            </h1>
            <p className="text-xl text-blue-100">サイト構築・業務管理・集客支援をワンストップで提供するDXサービス</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-bold"
                onClick={scrollToContact}
              >
                担当に相談してみる
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleAIConsultationClick}
              >
                プロのTIPsを見てみる
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>業界のプロが対応</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>トラック販売業界特化</span>
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-0 right-0 hidden w-2/5 translate-y-1/4 md:block">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="TruckBase管理画面"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div> */}
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">こんなお悩みありませんか？</h2>
            <p className="mt-4 text-lg text-gray-600">多くのトラック販売事業者様が抱える課題を解決します</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "展示場に来ないと在庫が伝えられない",
                description: "お客様は実際に見に来ないと在庫状況や詳細がわからず、機会損失につながっています。",
                icon: <Truck className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "問い合わせが電話のみで機会損失",
                description: "営業時間外の問い合わせに対応できず、潜在顧客を逃しています。",
                icon: <Phone className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "業務が属人化していて非効率",
                description: "顧客情報や見積もりが個人管理され、組織的な営業活動ができていません。",
                icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "広告・SNSがうまく運用できない",
                description: "効果的な集客方法がわからず、広告費が無駄になっています。",
                icon: <ArrowRight className="h-10 w-10 text-blue-600" />,
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-2 rounded-full bg-blue-100 p-2 w-fit">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">提供サービス</h2>
            <p className="mt-4 text-lg text-gray-600">トラック販売に特化した3つのサービスをワンストップで提供します</p>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {serviceDetails.map((service, index) => (
              <div key={index} className="flex flex-col rounded-lg border bg-white p-6 shadow-lg">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Dialog
                  open={openServiceId === service.id}
                  onOpenChange={(open) => {
                    if (open) {
                      setOpenServiceId(service.id)
                    } else {
                      setOpenServiceId(null)
                    }
                  }}
                >
                  <DialogTrigger asChild>
                    <Button className="mt-auto" variant="outline">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                      <DialogDescription>トラック販売事業者様向けサービスの詳細情報</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="overflow-hidden rounded-lg mb-6">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={300}
                          height={200}
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button onClick={() => setOpenServiceId(null)}>閉じる</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">導入による変化</h2>
            <p className="mt-4 text-lg text-gray-600">TruckBase導入前後で、こんな変化が期待できます</p>
          </div>
          <div className="mt-16 space-y-12">
            {[
              {
                title: "問い合わせ管理",
                before: "電話・FAXでの問い合わせ管理",
                after: "Webからの問い合わせ増加＋自動通知",
                beforeDetails: "営業時間内の対応のみ、記録が属人化",
                afterDetails: "24時間受付、自動返信、担当者へのLINE通知",
              },
              {
                title: "在庫管理",
                before: "紙やExcelでの在庫管理",
                after: "システム化された在庫管理とWeb公開",
                beforeDetails: "更新遅延、情報共有の難しさ",
                afterDetails: "リアルタイム更新、Webサイトとの連携",
              },
              {
                title: "営業活動",
                before: "個人の経験と勘に頼った営業",
                after: "データに基づく効率的な営業活動",
                beforeDetails: "成約率の低さ、属人的な営業手法",
                afterDetails: "顧客の行動分析、効果的なアプローチ",
              },
            ].map((item, index) => (
              <div key={index} className="grid gap-8 md:grid-cols-2">
                <div className="relative rounded-lg bg-white p-8 shadow-lg">
                  <div className="absolute -top-4 left-4 rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
                    Before
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{item.before}</h3>
                  <p className="text-gray-600">{item.beforeDetails}</p>
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <div className="relative rounded-lg bg-blue-50 p-8 shadow-lg">
                  <div className="absolute -top-4 left-4 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                    After
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{item.after}</h3>
                  <p className="text-gray-600">{item.afterDetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">導入事例</h2>
            <p className="mt-4 text-lg text-gray-600">多くのトラック販売事業者様に選ばれています</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                company: "株式会社トラックプロ",
                industry: "中古トラック販売",
                services: ["販売サイト構築", "業務効率化ツール"],
                results: "問い合わせ数3倍、成約率25%向上",
                quote: "24時間問い合わせが入るようになり、営業効率が大幅に向上しました。",
              },
              {
                company: "大和自動車株式会社",
                industry: "新車・中古トラック販売",
                services: ["業務効率化ツール", "広告/SNS運用支援"],
                results: "広告費30%削減、ROI150%向上",
                quote: "効果的な広告運用により、無駄な広告費を削減しながら成果を上げられています。",
              },
              {
                company: "東日本トラックセンター",
                industry: "トラック販売・整備",
                services: ["販売サイト構築", "業務効率化ツール", "広告/SNS運用支援"],
                results: "月間売上20%増加、業務工数50%削減",
                quote: "全てのサービスを導入したことで、業務効率と売上の両方が向上しました。",
              },
            ].map((case_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="text-xl font-bold">{case_.company}</h3>
                  <p className="text-blue-100">{case_.industry}</p>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">導入サービス</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {case_.services.map((service, i) => (
                        <span key={i} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">導入効果</p>
                    <p className="mt-1 font-medium text-green-600">{case_.results}</p>
                  </div>
                  <div className="mt-4 rounded-lg bg-gray-50 p-4 italic">
                    <p className="text-gray-600">"{case_.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">選ばれる理由</h2>
            <p className="mt-4 text-lg text-blue-200">なぜTruckBaseが多くのトラック販売事業者に選ばれるのか</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "トラック販売特化の支援実績",
                description:
                  "トラック販売業界に特化したサービス提供により、業界特有の課題を的確に解決します。100社以上の導入実績があります。",
              },
              {
                title: "高い業務理解と柔軟な開発力",
                description:
                  "トラック販売の業務フローを熟知したスタッフが、お客様の要望に合わせた柔軟なシステム開発を行います。",
              },
              {
                title: "導入後も伴走サポート",
                description:
                  "導入後も定期的なミーティングやサポートを行い、継続的な改善を支援します。専任のサポート担当者が対応します。",
              },
            ].map((reason, index) => (
              <div key={index} className="rounded-lg bg-blue-800 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="mb-4 text-xl font-bold">{reason.title}</h3>
                <p className="text-blue-200">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">よくある質問</h2>
            <p className="mt-4 text-lg text-gray-600">お客様からよくいただくご質問にお答えします</p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "スマホでも使えますか？",
                  answer:
                    "はい、すべてのサービスはスマートフォンやタブレットなど、あらゆるデバイスで快適にご利用いただけます。特に営業担当者様が外出先でも利用できるよう、モバイルファーストで設計しています。",
                },
                {
                  question: "ITに詳しくなくても大丈夫ですか？",
                  answer:
                    "はい、ITの知識がなくても簡単に操作できるよう設計しています。また、導入時には丁寧な研修を行い、操作方法をしっかりとサポートします。導入後のサポートも充実していますので、ご安心ください。",
                },
                {
                  question: "どれくらいで導入できますか？",
                  answer:
                    "標準的なプランで約1〜2ヶ月程度です。お客様の要望やカスタマイズの内容によって期間は変動します。まずは無料相談で、具体的なスケジュールをご提案させていただきます。",
                },
                {
                  question: "既存のシステムとの連携は可能ですか？",
                  answer:
                    "はい、可能です。既存の会計システムや在庫管理システムなどとのAPI連携が可能です。具体的な連携方法については、個別にご相談ください。",
                },
                {
                  question: "料金体系を教えてください",
                  answer:
                    "初期費用と月額費用のプラン制となっています。サービス内容や規模によって料金は異なりますので、詳細は資料請求または無料相談にてご案内させていただきます。",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">導入の流れ</h2>
            <p className="mt-4 text-lg text-gray-600">お問い合わせから導入までの流れをご紹介します</p>
          </div>
          <div className="mt-16">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-blue-200" />
              <div className="space-y-8">
                {[
                  {
                    step: "STEP 1",
                    title: "無料相談",
                    description:
                      "お問い合わせフォームまたはお電話にてご連絡ください。現状の課題や要望をお聞かせください。",
                  },
                  {
                    step: "STEP 2",
                    title: "ヒアリング",
                    description: "貴社の業務内容や課題を詳しくヒアリングし、最適なソリューションをご提案します。",
                  },
                  {
                    step: "STEP 3",
                    title: "ご提案・お見積もり",
                    description: "ヒアリング内容をもとに、具体的なサービス内容と料金をご提案します。",
                  },
                  {
                    step: "STEP 4",
                    title: "サイト制作・ツール導入",
                    description: "ご契約後、サイト制作やツール導入を進めます。定期的に進捗報告を行います。",
                  },
                  {
                    step: "STEP 5",
                    title: "サポート開始",
                    description: "導入後も継続的にサポートを行い、効果測定や改善提案を行います。",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="absolute left-1/2 -translate-x-1/2 transform">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-200 bg-blue-600 text-white">
                          {index + 1}
                        </div>
                      </div>
                      <div className={`w-1/2 ${index % 2 === 0 ? "pr-20 text-right" : "pl-12 text-left"}`}>
                        {index % 2 === 0 ? (
                          <div className="space-y-2">
                            <div className="text-sm font-medium text-blue-600">{step.step}</div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        ) : null}
                      </div>
                      <div className={`w-1/2 ${index % 2 === 1 ? "pl-12 text-left" : "pr-20 text-right"}`}>
                        {index % 2 === 1 ? (
                          <div className="space-y-2">
                            <div className="text-sm font-medium text-blue-600">{step.step}</div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-blue-900 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">まずは無料でご相談ください</h2>
            <p className="mt-4 text-lg text-blue-200">トラック販売業務の効率化についてお気軽にご相談ください</p>
            <div className="mx-auto mt-12 max-w-md rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">お問い合わせフォーム</h3>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                    placeholder="example@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                    お問い合わせ内容
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 p-2 text-gray-900"
                    placeholder="ご相談内容をご記入ください"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  送信する
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed CTA Button (Mobile) */}
      <div className="fixed bottom-0 left-0 z-40 w-full border-t bg-white p-4 md:hidden">
        <Button 
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          まずは無料相談
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-white">
                <Truck className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">TruckBase</span>
              </div>
              <p className="mt-4">
                トラック販売事業者向けDXサービス
                <br />
                サイト構築・業務効率化・集客支援
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">サービス</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    販売サイト構築
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    業務効率化ツール
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    広告/SNS運用支援
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">会社情報</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">お問い合わせ</h3>
              <address className="not-italic">
                <p>〒123-4567</p>
                <p>東京都千代田区〇〇1-2-3</p>
                <p className="mt-2">TEL: 03-1234-5678</p>
                <p>Email: info@truckbase.jp</p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TruckBase All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Consultation Modal */}
      <Dialog open={isAIConsultationOpen} onOpenChange={setIsAIConsultationOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">トラック販売のプロフェッショナルTIPS</DialogTitle>
            <DialogDescription>
              実践的な販売・営業・集客のノウハウをお届けします
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            {randomTip && (
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {randomTip.category}
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    {randomTip.impact}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{randomTip.title}</h3>
                <p className="mt-2 text-gray-700">{randomTip.content}</p>
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={() => setIsAIConsultationOpen(false)}>閉じる</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
