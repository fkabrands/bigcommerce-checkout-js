import { AchInstrument, PaymentInstrument } from '@bigcommerce/checkout-sdk';

export default function isAchInstrument(
    instrument: PaymentInstrument,
): instrument is AchInstrument {
    return instrument.method === 'ach';
}
