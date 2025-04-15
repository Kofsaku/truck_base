"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Truck } from "lucide-react"

export default function PrivacyPolicy() {
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
              <h1 className="mb-8 text-3xl font-bold">プライバシーポリシー</h1>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. 個人情報の定義</h2>
                  <p className="text-gray-600">
                    当社は、個人情報の保護に関する法律に基づき、以下の情報を個人情報として取り扱います。
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>氏名、住所、電話番号、メールアドレス等の個人を特定できる情報</li>
                    <li>サービス利用履歴、お問い合わせ内容等の利用情報</li>
                    <li>その他、個人を特定できる情報</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. 個人情報の利用目的</h2>
                  <p className="text-gray-600">
                    当社は、収集した個人情報を以下の目的で利用いたします。
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>サービスの提供・改善</li>
                    <li>お問い合わせへの対応</li>
                    <li>新サービスの開発</li>
                    <li>マーケティング活動</li>
                    <li>法令等への対応</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. 個人情報の管理</h2>
                  <p className="text-gray-600">
                    当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. 個人情報の第三者提供</h2>
                  <p className="text-gray-600">
                    当社は、以下の場合を除き、個人情報を第三者に提供いたしません。
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>お客様の同意がある場合</li>
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体又は財産の保護のために必要がある場合</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. 個人情報の開示・訂正等</h2>
                  <p className="text-gray-600">
                    お客様は、当社が保有する個人情報の開示、訂正、利用停止等を請求することができます。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. お問い合わせ</h2>
                  <p className="text-gray-600">
                    本ポリシーに関するお問い合わせは、下記までご連絡ください。
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">メールアドレス：info@miitaso.com</p>
                    <p className="text-gray-600">電話番号：090-6266-0207</p>
                  </div>
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
                  <Link href="https://www.miitaso.com/about" className="hover:text-blue-400">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-blue-400">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">お問い合わせ</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">株式会社miitaso</p>
                <p className="text-sm text-gray-600">〒104-0061 東京都中央区銀座1丁目12番4号N&E BLD.6F</p>
                <p className="text-sm text-gray-600">TEL: 090-6266-0207</p>
                <p className="text-sm text-gray-600">Email: info@miitaso.com</p>
              </div>
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