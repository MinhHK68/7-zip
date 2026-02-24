/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans text-[13px] leading-normal flex justify-center">
      <div className="w-full max-w-[1200px] flex">
        {/* Left Sidebar */}
        <div className="w-[160px] bg-[#E0E0E0] min-h-screen flex-shrink-0 border-r border-gray-300">
          <div className="p-4">
            <svg width="104" height="41" viewBox="0 0 104 41" xmlns="http://www.w3.org/2000/svg" className="border border-black bg-white w-full h-auto">
              <rect x="2" y="2" width="37" height="37" fill="#000" />
              <text x="20" y="32" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#fff" textAnchor="middle">7</text>
              <text x="70" y="32" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#000" textAnchor="middle">ZIP</text>
            </svg>
          </div>
          <div className="px-4 py-2">
            <ul className="space-y-1 font-bold text-[#0000EE]">
              <li><a href="#" className="hover:underline text-black">Home</a></li>
              <li><a href="#" className="hover:underline">7z Format</a></li>
              <li><a href="#" className="hover:underline">LZMA SDK</a></li>
              <li><a href="#" className="hover:underline">Download</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Links</a></li>
            </ul>
          </div>
          <div className="px-4 py-4 mt-4 border-t border-gray-400">
            <ul className="space-y-0.5 text-[#0000EE]">
              <li className="font-bold text-black">English</li>
              <li><a href="#" className="hover:underline">Chinese Simpl.</a></li>
              <li><a href="#" className="hover:underline">Chinese Trad.</a></li>
              <li><a href="#" className="hover:underline">Esperanto</a></li>
              <li><a href="#" className="hover:underline">French</a></li>
              <li><a href="#" className="hover:underline">German</a></li>
              <li><a href="#" className="hover:underline">Japanese</a></li>
              <li><a href="#" className="hover:underline">Portuguese Brazil</a></li>
              <li><a href="#" className="hover:underline">Spanish</a></li>
              <li><a href="#" className="hover:underline">Thai</a></li>
              <li><a href="#" className="hover:underline">Vietnamese</a></li>
            </ul>
          </div>
          <div className="px-4 py-4 mt-4 border-t border-gray-400">
            <ul className="space-y-0.5 text-[#0000EE]">
              <li><a href="#" className="hover:underline">7-max</a></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 flex">
          <div className="flex-1 pr-6">
            <h1 className="text-center text-xl font-bold mb-4">7-Zip</h1>
            <p className="mb-4">
              <strong>7-Zip</strong> is a file archiver with a high compression ratio.
            </p>
            
            <p className="font-bold mb-2">Download 7-Zip 26.00 (2026-02-12) for Windows x64 (64-bit):</p>
            <table className="w-full max-w-[450px] border-collapse border border-white mb-6 text-center">
              <thead>
                <tr className="bg-[#99CC99] font-bold">
                  <th className="border border-white p-1 w-20">Link</th>
                  <th className="border border-white p-1 w-16">Type</th>
                  <th className="border border-white p-1">Windows</th>
                  <th className="border border-white p-1 w-20">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#EEEEEE]">
                  <td className="border border-white p-1"><a href="https://github.com/MinhHK68/7-zip/releases/download/v1.0.0/7z_install.exe" className="text-[#0000EE] hover:underline">Download</a></td>
                  <td className="border border-white p-1">.exe</td>
                  <td className="border border-white p-1">64-bit x64</td>
                  <td className="border border-white p-1">1.6 MB</td>
                </tr>
              </tbody>
            </table>

            <p className="font-bold mb-2">Download 7-Zip 26.00 for another Windows platforms (32-bit x86 or ARM64):</p>
            <table className="w-full max-w-[450px] border-collapse border border-white mb-6 text-center">
              <thead>
                <tr className="bg-[#99CC99] font-bold">
                  <th className="border border-white p-1 w-20">Link</th>
                  <th className="border border-white p-1 w-16">Type</th>
                  <th className="border border-white p-1">Windows</th>
                  <th className="border border-white p-1 w-20">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#EEEEEE]">
                  <td className="border border-white p-1"><a href="https://github.com/MinhHK68/7-zip/releases/download/v1.0.0/7z_install.exe" className="text-[#0000EE] hover:underline">Download</a></td>
                  <td className="border border-white p-1">.exe</td>
                  <td className="border border-white p-1">32-bit x86</td>
                  <td className="border border-white p-1">1.3 MB</td>
                </tr>
                <tr className="bg-[#EEEEEE]">
                  <td className="border border-white p-1"><a href="https://github.com/MinhHK68/7-zip/releases/download/v1.0.0/7z_install.exe" className="text-[#0000EE] hover:underline">Download</a></td>
                  <td className="border border-white p-1">.exe</td>
                  <td className="border border-white p-1">64-bit ARM64</td>
                  <td className="border border-white p-1">1.5 MB</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-center font-bold text-lg mb-2 mt-8">License</h2>
            <p className="mb-4">
              <strong>7-Zip</strong> is <strong>free software</strong> with <strong>open source</strong>. The most of the code is under the <strong>GNU LGPL</strong> license. Some parts of the code are under the BSD 3-clause License. Also there is unRAR license restriction for some parts of the code. Read <a href="#" className="text-[#0000EE] hover:underline">7-Zip License</a> information.
            </p>
            <p className="mb-8">
              You can use 7-Zip on any computer, including a computer in a commercial organization. You don't need to register or pay for 7-Zip.
            </p>

            <h2 className="text-center font-bold text-lg mb-2">The main features of 7-Zip</h2>
            <ul className="list-disc pl-8 mb-6 space-y-1">
              <li>High compression ratio in <a href="#" className="text-[#0000EE] hover:underline">7z format</a> with <strong>LZMA</strong> and <strong>LZMA2</strong> compression</li>
              <li>Supported formats:
                <ul className="list-[circle] pl-8 mt-1 space-y-1">
                  <li>Packing / unpacking: 7z, XZ, BZIP2, GZIP, TAR, ZIP and WIM</li>
                  <li>Unpacking only: APFS, AR, ARJ, CAB, CHM, CPIO, CramFS, DMG, EXT, FAT, GPT, HFS, IHEX, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, QCOW2, RAR, RPM, SquashFS, UDF, UEFI, VDI, VHD, VHDX, VMDK, XAR and Z.</li>
                </ul>
              </li>
              <li>For ZIP and GZIP formats, <strong>7-Zip</strong> provides a compression ratio that is 2-10 % better than the ratio provided by PKZip and WinZip</li>
              <li>Strong AES-256 encryption in 7z and ZIP formats</li>
              <li>Self-extracting capability for 7z format</li>
              <li>Integration with Windows Shell</li>
              <li>Powerful File Manager</li>
              <li>Powerful command line version</li>
              <li>Plugin for FAR Manager</li>
              <li>Localizations for 87 languages</li>
            </ul>

            <p className="mb-4">
              <strong>7-Zip</strong> works in Windows 11 / 10 / 8 / 7 / Vista / XP / 2022 / 2019 / 2016 / 2012 / 2008 / 2003 / 2000.
            </p>
            <p className="mb-4">
              On <a href="#" className="text-[#0000EE] hover:underline">7-Zip's SourceForge Page</a> you can find a forum, bug reports, and feature request systems.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="w-[200px] flex-shrink-0 space-y-4">
            <div className="border border-white">
              <div className="bg-[#9999CC] text-white font-bold p-1 flex justify-between text-sm">
                <span>7-Zip 26.00</span>
                <span>2026-02-12</span>
              </div>
              <div className="p-1 bg-[#EEEEEE]">
                <a href="#" className="text-[#0000EE] hover:underline text-xs">7-Zip 26.00</a>
              </div>
            </div>

            <div className="border border-white">
              <div className="bg-[#9999CC] text-white font-bold p-1 flex justify-between text-sm">
                <span>7-Zip 25.01</span>
                <span>2025-08-03</span>
              </div>
              <div className="p-1 bg-[#EEEEEE]">
                <a href="#" className="text-[#0000EE] hover:underline text-xs">7-Zip 25.01</a>
              </div>
            </div>

            <div className="border border-white">
              <div className="bg-[#9999CC] text-white font-bold p-1 flex justify-between text-sm">
                <span>7-Zip 25.00</span>
                <span>2025-07-05</span>
              </div>
              <div className="p-1 bg-[#EEEEEE]">
                <a href="#" className="text-[#0000EE] hover:underline text-xs">7-Zip 25.00</a>
              </div>
            </div>

            <div className="border border-white">
              <div className="bg-[#9999CC] text-white font-bold p-1 text-sm">
                7-Zip ChangeLog
              </div>
              <div className="p-1 bg-[#EEEEEE]">
                <a href="#" className="text-[#0000EE] hover:underline text-xs">History of 7-zip changes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
