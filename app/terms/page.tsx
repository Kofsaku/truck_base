"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Truck } from "lucide-react"

export default function Terms() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">TruckBase</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              トップページに戻る
            </Link>

            <div className="prose prose-blue max-w-none">
              <h1 className="mb-8 text-3xl font-bold">利用規約</h1>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">第1条（適用）</h2>
                  <p className="text-gray-600">
                    本規約は、TruckBase（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第2条（利用登録）</h2>
                  <p className="text-gray-600">
                    本サービスの利用を希望する者は、本規約に同意の上、当社の定める方法によって利用登録を申請するものとします。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第3条（禁止事項）</h2>
                  <p className="text-gray-600">
                    利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                    <li>当社のサービスの運営を妨害するおそれのある行為</li>
                    <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                    <li>不正アクセスをし、またはこれを試みる行為</li>
                    <li>その他、当社が不適切と判断する行為</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第4条（本サービスの提供の停止等）</h2>
                  <p className="text-gray-600">
                    当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第5条（利用制限および登録抹消）</h2>
                  <p className="text-gray-600">
                    当社は、以下の場合には、事前の通知なく、利用者に対して、本サービスの全部もしくは一部の利用を制限し、または利用者としての登録を抹消することができるものとします。
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>本規約のいずれかの条項に違反した場合</li>
                    <li>登録事項に虚偽の事実があることが判明した場合</li>
                    <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第6条（免責事項）</h2>
                  <p className="text-gray-600">
                    当社は、本サービスに関して、利用者と他の利用者または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第7条（サービス内容の変更等）</h2>
                  <p className="text-gray-600">
                    当社は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第8条（利用規約の変更）</h2>
                  <p className="text-gray-600">
                    当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第9条（通知または連絡）</h2>
                  <p className="text-gray-600">
                    利用者と当社との間の通知または連絡は、当社の定める方法によって行うものとします。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第10条（権利義務の譲渡の禁止）</h2>
                  <p className="text-gray-600">
                    利用者は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">第11条（準拠法・裁判管轄）</h2>
                  <p className="text-gray-600">
                    本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                  </p>
                </section>
              </div>

              <p className="mt-8 text-sm text-gray-500">制定日：2024年4月1日</p>
            </div>
          </div>
        </div>
      </main>

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
    </div>
  )
} 