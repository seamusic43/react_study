import MainCard from "@/components/MainCard";
import { useCallback, useState } from "react";


export default function Main() {
  const [display_time, setDisplayTime] = useState({
    join: '12:12',
    question: '13:13',
    status: '14:14',
    order: '15:15',
    cancel: '16:16',
    settlement: '17:17',
    notice: '18:18',
    system_notice: '19:19',
  });
  const [settingData, setSettingData] = useState({
    join_count: 2,
    question: { no: 1, ok: 8 },
    account: { use: 3, total: 10 },
    order: { pay: 2, ready: 3, done: 4 },
    cancel: { stop: 1, refund: 2, exchange: 3 },
    settlement: [
      { date: '2021-01', ok: 100, none: 4 },
      { date: '2021-02', ok: 40, none: 10 },
      { date: '2021-03', ok: 80, none: 6 }
    ],
    notice: [
      { type: 'all', date: '2021-01-01', title: '공지사항1', content: '공지사항 내용1' },
      { type: 'part', date: '2021-01-02', title: '공지사항2', content: '공지사항 내용2' },
      { type: 'part', date: '2021-01-03', title: '공지사항3', content: '공지사항 내용3' },
      { type: 'part', date: '2021-02-03', title: '개별 공지사항이다.', content: '내용까지 보일 필요 없을듯?' },
      { type: 'part', date: '2021-03-03', title: '공지사항3', content: '공지사항 내용3' },
    ],
    system_notice: [
      { date: '2021-01-01', title: '시스템 공지사항1', content: '시스템 공지사항 내용1' },
      { date: '2021-01-02', title: '시스템 공지사항2', content: '시스템 공지사항 내용2' },
      { date: '2021-01-03', title: '시스템 공지사항3', content: '시스템 공지사항 내용3' },
    ],
  });
  const updateSettingData = useCallback((setType, data) => {
    setSettingData({
      ...settingData,
      [setType]: data
    })
  }, [settingData]);

  const updateJoinTime = useCallback((setType) => {
    const now = new Date();
    const nowTime = now.getHours() + ':' + now.getMinutes();
    setDisplayTime({
      ...display_time,
      [setType]: nowTime
    })
    console.log(display_time)
  }, [display_time]);
  const checkAbleTime = useCallback((chkType) => {
    const now = new Date();
    const nowTime = now.getHours() + ':' + now.getMinutes();
    const chkTime = display_time[chkType];
    if (chkTime == nowTime) {
      return false;
    }
    return true;
  }, [display_time]);

  const getJoinData = useCallback(() => {
    console.log('getJoinData');
    if (checkAbleTime('join')) {
      // get data from server
      // update Time if update ok
      updateSettingData('join_count', 3);
      updateJoinTime('join');
    }
  }, [checkAbleTime, updateJoinTime, updateSettingData]);
  const getQuestionData = () => {
    console.log('getQuestionData');
    if (checkAbleTime('question')) {
      // get data from server
      // update Time if update ok
      updateSettingData('question', { no: 2, ok: 9 });
      updateJoinTime('question');
    }
  };
  const getAccountData = () => {
    console.log('getAccountData');
    if (checkAbleTime('status')) {
      // get data from server
      // update Time if update ok
      updateSettingData('account', { use: 4, total: 10 });
      updateJoinTime('status');
    }
  };

  const getOrderData = () => {
    console.log('getOrderData');
    if (checkAbleTime('order')) {
      // get data from server
      // update Time if update ok
      updateSettingData('order', { pay: 3, ready: 4, done: 5 });
      updateJoinTime('order');
    }
  };

  const getCancelData = () => {
    console.log('getCancelData');
    if (checkAbleTime('cancel')) {
      // get data from server
      // update Time if update ok
      updateSettingData('cancel', { stop: 2, refund: 3, exchange: 4 });
      updateJoinTime('cancel');
    }
  };

  const getSettlementData = () => {
    console.log('getSettlementData');
    if (checkAbleTime('settlement')) {
      // get data from server
      // update Time if update ok
      updateSettingData('settlement', [
        { date: '2021-01', ok: 120, none: 4 },
        { date: '2021-02', ok: 60, none: 10 },
        { date: '2021-03', ok: 100, none: 6 }
      ]);
      updateJoinTime('settlement');
    }
  };
  const getNoticeData = () => {
    console.log('getNoticeData');
    if (checkAbleTime('notice')) {
      // get data from server
      // update Time if update ok
      updateSettingData('notice', [
        { date: '2021-07-01', title: '공지사항1', content: '공지사항 내용1' },
        { date: '2021-07-02', title: '공지사항2', content: '공지사항 내용2' },
        { date: '2021-07-03', title: '공지사항3', content: '공지사항 내용3' }
      ]);
      updateJoinTime('notice');
    }
  };

  const getSystemNoticeData = () => {
    console.log('getSystemNoticeData');
    if (checkAbleTime('system_notice')) {
      // get data from server
      // update Time if update ok
      updateSettingData('system_notice', [
        { date: '2021-07-01', title: '시스템 공지사항1', content: '시스템 공지사항 내용1' },
        { date: '2021-07-02', title: '시스템 공지사항2', content: '시스템 공지사항 내용2' },
        { date: '2021-07-03', title: '시스템 공지사항3', content: '시스템 공지사항 내용3' }
      ]);
      updateJoinTime('system_notice');
    }
  };

  return (
    <>
      <div className="grid w-full grid-cols-3 h-28">
        <MainCard title="거래처 가입 신청" display_time={display_time.join} onRefresh={getJoinData}>
          <div className="flex justify-between">
            <span>미승인</span>
            <span className="text-lg font-bold">{settingData.join_count}</span>
          </div>
        </MainCard>
        <MainCard title="거래처 문의" display_time={display_time.question} onRefresh={getQuestionData}>
          <div className="flex justify-between">
            <span>미답변 / 답변완료</span>
            <span className="text-lg font-bold">{settingData.question.no} / {settingData.question.ok} </span>
          </div>
        </MainCard>
        <MainCard title="거래처 계정 현황" display_time={display_time.status} onRefresh={getAccountData}>
          <div className="flex items-center justify-between">
            <progress className="w-28 progress progress-primary" value={settingData.account.use} max={settingData.account.total}></progress>
            <span className="text-lg font-bold">{settingData.account.use} / {settingData.account.total} <span className="text-sm font-normal">사용중 </span></span>
          </div>
        </MainCard>
      </div>
      <div className="grid w-full grid-cols-3"   >
        <MainCard title="발주 현황" display_time={display_time.order} className="h-48" onRefresh={getOrderData}>
          <div className="mb-4 text-xs text-gray-500">최근 30일, 발주건 기준</div>
          <div>
            <div className="flex justify-between">
              <span>결제확인</span>
              <span className="text-lg font-bold">{settingData.order.pay}</span>
            </div>
            <div className="flex justify-between">
              <span>출고준비</span>
              <span className="text-lg font-bold">{settingData.order.ready}</span>
            </div>
            <div className="flex justify-between">
              <span>출고완료</span>
              <span className="text-lg font-bold">{settingData.order.done}</span>
            </div>
          </div>
        </MainCard>
        <MainCard title="취소/반품/교환" display_time={display_time.cancel} className="h-48" onRefresh={getCancelData}>
          <div className="mb-4 text-xs text-gray-500">최근 30일, 발주건 기준</div>
          <div>
            <div className="flex justify-between">
              <span>출고중지요청</span>
              <span className="text-lg font-bold">{settingData.cancel.stop}</span>
            </div>
            <div className="flex justify-between">
              <span>반품접수</span>
              <span className="text-lg font-bold">{settingData.cancel.refund}</span>
            </div>
            <div className="flex justify-between">
              <span>교환접수</span>
              <span className="text-lg font-bold">{settingData.cancel.exchange}</span>
            </div>
          </div>
        </MainCard>
        <MainCard title="정산 현황" display_time={display_time.settlement} className="h-48" onRefresh={getSettlementData}>
          <div className="mb-4 text-xs text-gray-500">최근 3달 기준</div>
          <div>
            {settingData.settlement.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.date}</span>
                <span className="">정산완료 <span className="font-bold">{item.ok}</span> / 미정산 <span className="font-bold">{item.none}</span></span>
              </div>
            ))}
          </div>
        </MainCard>

      </div>
      <div className="grid w-full grid-cols-2">
        <MainCard title="거래처 공지사항" display_time={display_time.notice} onRefresh={getNoticeData}>
          {settingData.notice.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div>
                {item.type === 'all' ? <span className="badge badge-neutral">전체</span> : <span className="badge badge-ghost">부분</span>}
                <span className="ml-2">{item.title}</span>
              </div>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          ))}
        </MainCard>
        <div>
          <MainCard title="코끼리 공지사항" display_time={display_time.system_notice} onRefresh={getSystemNoticeData}>
            {settingData.system_notice.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="ml-2">{item.title}</span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            ))}
          </MainCard>
          <div className="flex">
            <div className="m-2 text-center border-2 border-green-500 shadow-xl card bg-coggiri_link_bg w-1/2">
              <div className="py-4 px-2 inline-block justity-center card-body">코끼리 SCM<span className="material-symbols-rounded text-gray-400">open_in_new</span>
              </div>
            </div>
            <div className="m-2 text-center border-2 border-green-500 shadow-xl card bg-coggiri_link_bg w-1/2">
              <div className="py-4 px-2 inline-block justity-center card-body">코끼리 SCM<span className="material-symbols-rounded text-gray-400">open_in_new</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}