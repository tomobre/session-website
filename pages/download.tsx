/* eslint-disable @next/next/no-html-link-for-pages */
import { ReactComponent as AndroidSVG } from '@/assets/svgs/android_robot_head.svg';
import { ReactComponent as AppleSVG } from '@/assets/svgs/apple.svg';
import Container from '@/components/Container';
import { ReactComponent as FDroidSVG } from '@/assets/svgs/fdroid-logo.svg';
import Image from 'next/image';
import { Layout } from '@/components/ui';
import Link from 'next/link';
import { ReactComponent as LinuxSVG } from '@/assets/svgs/linux.svg';
import { ReactComponent as UbuntuSVG } from '@/assets/svgs/ubuntu.svg';
import METADATA from '@/constants/metadata';
import { ReactElement } from 'react';
import { ReactComponent as WindowsSVG } from '@/assets/svgs/windows.svg';
import classNames from 'classnames';
import { useState } from 'react';

export default function Download(): ReactElement {
  const subtitleClasses = classNames('text-xl', 'lg:text-3xl', 'my-5');
  const downloadContainerClasses = classNames(
    'pb-2 lg:py-3  z-10 flex md:flex-row flex-col  justify-center items-center'
  );
  const downloadLinkClasses = classNames(
    'text-lg font-bold md:rounded-3xl md:py-1 py-3 mr-4  border-b-2 md:border-none border-gray-200 border-dashed md:w-auto w-52',
    'md:text-xl lg:text-3xl',
    'lg:pr-2 lg:ml-2',
    'transition-colors duration-300'
  );
  const downloadSVGClasses = 'inline-block mx-3 -mt-2 fill-current';
  const deviceButtonClasses =
    'border-b-4 border-primary border-w-4 focus:outline-none';

  const [device, setDevice] = useState(0);

  const renderDevice = (device: number) => {
    switch (device) {
      case 0:
        return (
          <div className={classNames(downloadContainerClasses)}>
            <Link href="/android">
              <a
                className={classNames(
                  downloadLinkClasses,
                  'lg:hover:bg-gray-dark lg:hover:text-primary'
                )}
              >
                <AndroidSVG
                  className={classNames(
                    downloadSVGClasses,
                    'w-6 h-6',
                    'md:w-8 md:h-8'
                  )}
                />
                <span>Android</span>
              </a>
            </Link>

            <div
              className={classNames(
                downloadContainerClasses,
                'lg:border-gray-dark'
              )}
            >
              <Link href="/apk">
                <a
                  className={classNames(
                    downloadLinkClasses,
                    'lg:hover:bg-gray-dark lg:hover:text-primary'
                  )}
                >
                  <AndroidSVG
                    className={classNames(
                      downloadSVGClasses,
                      'w-6 h-6',
                      'md:w-8 md:h-8'
                    )}
                  />
                  <span>APK</span>
                </a>
              </Link>
            </div>
            <div
              className={classNames(
                downloadContainerClasses,
                'lg:border-gray-dark'
              )}
            >
              <Link href="/f-droid">
                <a
                  className={classNames(
                    downloadLinkClasses,
                    'lg:hover:bg-gray-dark lg:hover:text-primary'
                  )}
                >
                  <FDroidSVG
                    className={classNames(
                      downloadSVGClasses,
                      'w-5 h-5',
                      'md:w-7 md:h-7'
                    )}
                  />
                  <span>F-Droid</span>
                </a>
              </Link>
            </div>
            <div
              className={classNames(
                downloadContainerClasses,
                'lg:border-primary'
              )}
            >
              <Link href="/iphone">
                <a
                  className={classNames(
                    downloadLinkClasses,
                    'lg:hover:bg-gray-dark lg:hover:text-primary'
                  )}
                >
                  <AppleSVG
                    className={classNames(
                      downloadSVGClasses,
                      'w-4 h-4',
                      'md:w-6 md:h-6'
                    )}
                  />
                  <span>iPhone</span>
                </a>
              </Link>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={classNames(downloadContainerClasses)}>
            <div
              className={classNames(
                downloadContainerClasses,
                'lg:border-white'
              )}
            >
              <a
                className={classNames(
                  downloadLinkClasses,
                  'lg:hover:bg-gray-dark lg:hover:text-primary'
                )}
                href="/mac"
              >
                <AppleSVG
                  className={classNames(
                    downloadSVGClasses,
                    'w-4 h-4',
                    'md:w-6 md:h-6'
                  )}
                />
                <span>Mac</span>
              </a>
            </div>
            <div
              className={classNames(
                downloadContainerClasses,
                'lg:border-white'
              )}
            >
              <a
                className={classNames(
                  downloadLinkClasses,
                  'lg:hover:bg-gray-dark lg:hover:text-primary'
                )}
                href="/windows"
              >
                <WindowsSVG
                  className={classNames(
                    downloadSVGClasses,
                    'w-4 h-4',
                    'md:w-6 md:h-6'
                  )}
                />
                <span>Windows</span>
              </a>
            </div>
            <div
              className={classNames(
                downloadContainerClasses,
                'lg:border-gray-dark'
              )}
            >
              <a
                className={classNames(
                  downloadLinkClasses,
                  'lg:hover:bg-gray-dark lg:hover:text-primary'
                )}
                href="/linux"
              >
                <LinuxSVG
                  className={classNames(
                    downloadSVGClasses,
                    'w-5 h-5',
                    'md:w-7 md:h-7'
                  )}
                />
                <span>Linux (AppImage)</span>
              </a>
            </div>
            <div
              className={classNames(
                downloadContainerClasses,
                'lg:border-gray-dark'
              )}
            >
              <a
                className={classNames(
                  downloadLinkClasses,
                  'lg:hover:bg-gray-dark lg:hover:text-primary'
                )}
                href="https://docs.oxen.io/products-built-on-oxen/session/guides/installing-on-linux-debian-based-distros"
              >
                <UbuntuSVG
                  className={classNames(
                    downloadSVGClasses,
                    'w-5 h-5',
                    'md:w-7 md:h-7'
                  )}
                />
                <span>Linux (DEB)</span>
              </a>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <Layout title="Download" metadata={METADATA.DOWNLOAD_PAGE}>
      <section>
        <Container
          hasMinHeight={false}
          heights={{
            small: '100%',
            medium: '100%',
            large: '100%',
          }}
          classes={classNames(
            'px-0 py-0',
            'md:px-0 md:py-0',
            'lg:-mt-4 lg:mb-4 lg:pl-0 lg:pr-0 lg:flex flex-col lg:max-w-none',
            '2xl: mt-0'
          )}
        >
          <div className="flex justify-center items-center">
            <Image
              width={1363}
              height={694}
              src="/assets/images/hero-download.png"
            />
          </div>
          <div className={classNames(subtitleClasses, 'flex justify-center')}>
            <button
              className={classNames(
                device === 0 ? deviceButtonClasses : 'mb-1',
                'mr-20'
              )}
              onClick={() => setDevice(0)}
            >
              <strong> Mobile</strong>
            </button>
            <button
              onClick={() => setDevice(1)}
              className={classNames(
                device === 1 ? deviceButtonClasses : 'mb-1'
              )}
            >
              <strong> Desktop</strong>
            </button>
          </div>
          <div>{renderDevice(device)}</div>
        </Container>
      </section>
    </Layout>
  );
}
